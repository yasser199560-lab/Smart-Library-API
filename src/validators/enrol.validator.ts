import { z } from "zod";

export const createEnrollmentSchema = z.object({
  body: z.object({
    enroll_id: z.number().int().positive(),

    member_id: z.number().int().positive(),

    course_id: z.number().int().positive(),

    progress: z.number().min(0).max(100).optional()
  })
});

export const updateEnrollmentSchema = z.object({
  body: z.object({
    progress: z.number().min(0).max(100)
  })
});