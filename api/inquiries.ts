import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const InquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  type: z.enum(["general", "developer", "sales"]),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@parkeze.com";
  const EMAIL_FROM = process.env.EMAIL_FROM || "Parkeze <noreply@parkeze.com>";

  if (!RESEND_API_KEY) {
    return res.status(500).json({ message: "RESEND_API_KEY is not set" });
  }

  try {
    const raw = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const inquiry = InquirySchema.parse(raw);

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: EMAIL_FROM,
      to: [CONTACT_TO_EMAIL],
      replyTo: inquiry.email,
      subject: `New ${inquiry.type} inquiry — ${inquiry.name}`,
      text: [
        `New inquiry (${inquiry.type})`,
        ``,
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        ``,
        `Message:`,
        inquiry.message,
      ].join("\n"),
    });

    // match your client expectations if you want (201 + message)
    return res.status(201).json({
      id: crypto.randomUUID(),
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
      type: inquiry.type,
      createdAt: new Date().toISOString(),
    });
  } catch (err: any) {
    if (err?.name === "ZodError") {
      const first = err.issues?.[0];
      const field = first?.path?.[0] ? String(first.path[0]) : undefined;
      return res.status(400).json({
        message: first?.message ?? "Validation failed",
        ...(field ? { field } : {}),
      });
    }

    console.error("Inquiry function failed:", err);
    return res.status(500).json({ message: err?.message ?? "Internal error" });
  }
}
