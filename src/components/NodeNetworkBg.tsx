// Rede de nós conectados — SVG estático leve (sem canvas, sem JS de animação, sem raster).
// Paleta da marca: vermelho DCON + branco em opacidade baixa.

const NODES: [number, number, number][] = [
  [60, 120, 2.5], [180, 60, 1.8], [240, 210, 3], [340, 110, 2],
  [420, 260, 2.2], [520, 70, 1.6], [600, 190, 2.8], [700, 100, 2],
  [780, 250, 2.4], [880, 140, 1.8], [960, 60, 2.6], [1040, 220, 2],
  [1120, 120, 1.7], [1180, 280, 2.9], [120, 300, 2], [300, 350, 2.4],
  [480, 400, 1.9], [660, 340, 2.6], [840, 400, 2], [1020, 350, 2.3],
  [1160, 420, 1.8], [200, 460, 2.2], [400, 520, 2], [620, 470, 2.5],
  [820, 530, 1.9], [1000, 480, 2.4], [1140, 560, 2],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 5], [2, 4], [4, 6], [5, 6], [6, 7],
  [7, 8], [8, 9], [9, 10], [9, 11], [11, 12], [11, 13], [0, 14],
  [14, 15], [15, 2], [15, 16], [16, 17], [17, 6], [17, 18], [18, 19],
  [19, 11], [19, 20], [14, 21], [21, 22], [22, 16], [22, 23], [23, 17],
  [23, 24], [24, 18], [24, 25], [25, 19], [25, 26], [26, 20], [21, 15],
];

export function NodeNetworkBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none node-net"
      viewBox="0 0 1240 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="rgba(229, 5, 54, 0.30)" strokeWidth="0.7">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            opacity={i % 3 === 0 ? 0.9 : 0.5}
          />
        ))}
      </g>
      <g>
        {NODES.map(([x, y, r], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill={i % 4 === 0 ? "rgba(229, 5, 54, 0.85)" : "rgba(255, 255, 255, 0.55)"}
            className={`node-net-dot node-net-dot-${i % 5}`}
          />
        ))}
      </g>
    </svg>
  );
}
