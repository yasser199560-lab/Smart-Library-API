import { z } from "zod";

// 📌 CREATE MEMBER
export const createMemberSchema = z.object({
  body: z.object({
    member_id: z.number().int().positive(),

    full_name: z.string().min(2).max(100),

    email: z.string().email(),

    join_date: z.date().optional()
  })
});

// 📌 UPDATE MEMBER
export const updateMemberSchema = z.object({
  body: z.object({
    full_name: z.string().min(2).max(100).optional(),

    email: z.string().email().optional()
  })
});