import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "../controllers/course.controller";

import validate from "../middlewares/validate.middleware";

import {
  createCourseSchema,
  updateCourseSchema
} from "../validators/c.validator";

const router = express.Router();

router.post("/", validate(createCourseSchema), createCourse);

router.get("/", getCourses);

router.get("/:course_id", getCourseById);

router.put("/:course_id", validate(updateCourseSchema), updateCourse);

router.delete("/:course_id", deleteCourse);

export default router;