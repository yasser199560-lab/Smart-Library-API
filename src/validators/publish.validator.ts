import { z } from "zod";

// Create Publisher
export const createPublisherSchema = z.object({
  body: z.object({
    publisher_id: z.number().int().positive(),

    name: z.string().min(2).max(100),

    city: z.string().min(2).max(50)
  })
});

// Update Publisher
export const updatePublisherSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100).optional(),

    city: z.string().min(2).max(50).optional()
  })
});