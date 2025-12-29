import type { VercelRequest, VercelResponse } from "@vercel/node";
import { insertInquirySchema } from "../shared/schema";
import { sendInquiryEmail } from "../server/email";

// helper to return the 400 schema your client expects
function badRequest(res: VercelResponse, message: string, field?: string) {
  return res.status(400).json({ message, ...(field ? { field } : {}) });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const raw = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // zod validation (same as client)
    const inquiry = insertInquirySchema.parse(raw);

    // send email via your existing Resend code
    await sendInquiryEmail({
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
      type: inquiry.type,
    });

    // Return a shape compatible with `inquiries.$inferSelect`
    // (No DB yet, so we generate ID + timestamps)
    return res.status(201).json({
      id: crypto.randomUUID(),
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
      type: inquiry.type,
      createdAt: new Date().toISOString(),
    });
  } catch (err: any) {
    // Zod errors: return your validation schema
    if (err?.name === "ZodError") {
      const first = err.issues?.[0];
      const field = first?.path?.[0] ? String(first.path[0]) : undefined;
      const msg = first?.message ?? "Validation failed";
      return badRequest(res, msg, field);
    }

    // Resend / other runtime errors (still return 400 to match your client parsing)
    return badRequest(res, err?.message ?? "Failed to submit inquiry");
  }
}
