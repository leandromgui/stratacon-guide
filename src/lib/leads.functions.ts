import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(8).max(20),
  interest: z.string().trim().min(2).max(160),
  source_page: z.string().trim().max(255).optional().nullable(),
  referrer: z.string().trim().max(500).optional().nullable(),
  utm_source: z.string().trim().max(120).optional().nullable(),
  utm_medium: z.string().trim().max(120).optional().nullable(),
  utm_campaign: z.string().trim().max(160).optional().nullable(),
  user_agent: z.string().trim().max(500).optional().nullable(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadInputSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      interest: data.interest,
      source_page: data.source_page ?? null,
      referrer: data.referrer ?? null,
      utm_source: data.utm_source ?? null,
      utm_medium: data.utm_medium ?? null,
      utm_campaign: data.utm_campaign ?? null,
      user_agent: data.user_agent ?? null,
    });
    if (error) {
      console.error("[submitLead] insert failed", error);
      return { ok: false as const, error: "Não foi possível registrar agora." };
    }
    return { ok: true as const };
  });