import { z } from "zod";

// 📌 CREATE BOOK VALIDATION
export const createBookSchema = z.object({
  body: z.object({
    book_id: z.number().int().positive(),

    title: z.string().min(2).max(150),

    price: z.number().nonnegative().optional(),

    author_id: z.number().int().positive(),

    publisher_id: z.number().int().positive()
  })
});

// 📌 UPDATE BOOK VALIDATION
export const updateBookSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(150).optional(),

    price: z.number().nonnegative().optional(),

    author_id: z.number().int().positive().optional(),

    publisher_id: z.number().int().positive().optional()
  })
});