import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(), // 'general', 'developer', 'sales'
  createdAt: timestamp("created_at").defaultNow(),
});

// Enforce allowed inquiry types at the validation/type level
export const insertInquirySchema = createInsertSchema(inquiries)
  .omit({ id: true, createdAt: true })
  .extend({
    type: z.enum(["general", "developer", "sales"]),
  });

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
