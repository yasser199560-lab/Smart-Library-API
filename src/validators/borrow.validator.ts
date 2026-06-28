import { z } from "zod";

// 📌 CREATE BORROW
export const createBorrowSchema = z.object({
  body: z.object({
    borrow_id: z.number().int().positive(),

    member_id: z.number().int().positive(),

    book_id: z.number().int().positive(),

    borrow_date: z.date().optional(),

    return_date: z.date().optional()
  })
});