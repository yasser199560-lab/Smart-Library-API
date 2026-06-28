import { z } from "zod";

// 📌 CREATE MEMBERSHIP CARD VALIDATION
export const createMembershipCardSchema = z.object({
  body: z.object({
    card_id: z.number().int().positive(),

    member_id: z.number().int().positive(),

    card_number: z.string().min(1).max(20),

    issued_date: z.coerce.date(),
  }),
});

// 📌 UPDATE MEMBERSHIP CARD VALIDATION
export const updateMembershipCardSchema = z.object({
  body: z.object({
    member_id: z.number().int().positive().optional(),

    card_number: z.string().min(1).max(20).optional(),

    issued_date: z.coerce.date().optional(),
  }),
});