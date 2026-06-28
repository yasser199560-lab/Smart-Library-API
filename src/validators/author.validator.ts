import { z } from "zod";

export const createAuthorSchema = z.object({
  body: z.object({
    author_id: z
      .number()
      .int()
      .positive("Author ID must be a positive integer"),

    name: z
      .string()
      .trim()
      .min(2, "Author name must be at least 2 characters")
      .max(100, "Author name cannot exceed 100 characters"),

    country: z
      .string()
      .trim()
      .min(2, "Country must be at least 2 characters")
      .max(50, "Country cannot exceed 50 characters")
  })
});

export const updateAuthorSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(2, "Author name must be at least 2 characters")
      .max(100, "Author name cannot exceed 100 characters")
      .optional(),

    country: z
      .string()
      .trim()
      .min(2, "Country must be at least 2 characters")
      .max(50, "Country cannot exceed 50 characters")
      .optional()
  })
});