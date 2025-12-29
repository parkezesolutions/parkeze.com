import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendInquiryEmail(inquiry: {
  name: string;
  email: string;
  message: string;
  type: "general" | "developer" | "sales";
}) {
  if (!resend) throw new Error("RESEND_API_KEY is not set");

  const to = process.env.CONTACT_TO_EMAIL || "contact@parkeze.com";
  const from = process.env.EMAIL_FROM || "ParkeZe <noreply@parkeze.com>";

  await resend.emails.send({
    from,
    to: [to],
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
}
