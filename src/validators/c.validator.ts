import { z } from "zod";

export const createCourseSchema = z.object({
  body: z.object({
    course_id: z.number().int().positive(),

    title: z.string().min(2).max(100),

    instructor: z.string().min(2).max(100)
  })
});

export const updateCourseSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(100).optional(),

    instructor: z.string().min(2).max(100).optional()
  })
});