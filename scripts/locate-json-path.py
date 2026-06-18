#!/usr/bin/env python3
"""Resolve a JSON dotted/indexed path to (line, column) in a pretty-printed JSON file.

Usage: locate-json-path.py <path> <file>
  path: e.g. ".rules[1].parameters.required_status_checks[0].context"
  file: path to a pretty-printed JSON file

Prints "<line> <col>" on stdout. Falls back to "1 1" only if the path cannot be
resolved (e.g. malformed path or key missing).
"""
import json
import re
import sys


def tokenize(path_str):
    tokens = []
    for m in re.finditer(r"\.([A-Za-z_][A-Za-z0-9_]*)|\[(\d+)\]", path_str):
        if m.group(1) is not None:
            tokens.append(("key", m.group(1)))
        else:
            tokens.append(("idx", int(m.group(2))))
    return tokens


def resolve(text, tokens):
    def skip_ws(p):
        while p < len(text) and text[p] in " \t\r\n":
            p += 1
        return p

    def skip_string(p):
        p += 1
        while p < len(text):
            c = text[p]
            if c == "\\":
                p += 2
                continue
            if c == '"':
                return p + 1
            p += 1
        return p

    def skip_value(p):
        p = skip_ws(p)
        if p >= len(text):
            return p
        c = text[p]
        if c == '"':
            return skip_string(p)
        if c in "{[":
            open_c, close_c = c, ("}" if c == "{" else "]")
            depth = 1
            p += 1
            while p < len(text) and depth > 0:
                ch = text[p]
                if ch == '"':
                    p = skip_string(p)
                    continue
                if ch == open_c:
                    depth += 1
                elif ch == close_c:
                    depth -= 1
                p += 1
            return p
        m = re.match(r"[^\s,\]\}]+", text[p:])
        return p + (len(m.group()) if m else 1)

    pos = skip_ws(0)
    target = pos
    for kind, val in tokens:
        pos = skip_ws(pos)
        if kind == "key":
            if pos >= len(text) or text[pos] != "{":
                return None
            pos += 1
            found = False
            while pos < len(text):
                pos = skip_ws(pos)
                if text[pos] == "}":
                    break
                key_start = pos
                key_end = skip_string(pos)
                name = json.loads(text[key_start:key_end])
                pos = skip_ws(key_end)
                if text[pos] != ":":
                    return None
                pos = skip_ws(pos + 1)
                if name == val:
                    target = key_start
                    found = True
                    break
                pos = skip_value(pos)
                pos = skip_ws(pos)
                if pos < len(text) and text[pos] == ",":
                    pos += 1
            if not found:
                return None
        else:  # idx
            if pos >= len(text) or text[pos] != "[":
                return None
            pos += 1
            for _ in range(val):
                pos = skip_ws(pos)
                pos = skip_value(pos)
                pos = skip_ws(pos)
                if pos < len(text) and text[pos] == ",":
                    pos += 1
            pos = skip_ws(pos)
            target = pos
    return target


def line_col(text, p):
    line = text.count("\n", 0, p) + 1
    last_nl = text.rfind("\n", 0, p)
    col = p - last_nl if last_nl >= 0 else p + 1
    return line, col


def main():
    if len(sys.argv) != 3:
        print("usage: locate-json-path.py <path> <file>", file=sys.stderr)
        sys.exit(2)
    path_str, file_path = sys.argv[1], sys.argv[2]
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    tokens = tokenize(path_str)
    target = resolve(text, tokens) if tokens else 0
    if target is None:
        print("1 1")
        sys.exit(1)
    line, col = line_col(text, target)
    print(f"{line} {col}")


if __name__ == "__main__":
    main()