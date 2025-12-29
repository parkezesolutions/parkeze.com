import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendInquiryEmail } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);

      // 1) Save to DB
      // const inquiry = await storage.createInquiry(input);
      const inquiry = {
      id: 0,
      ...input,
      createdAt: new Date(),
  };

      // 2) Send email (don’t block submission if email fails)
      sendInquiryEmail(input).catch((err) => {
        console.error("Failed to send inquiry email:", err);
      });

      // 3) Respond 201 with inserted row (matches shared/routes.ts)
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
