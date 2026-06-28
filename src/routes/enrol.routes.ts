import express from "express";
import {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment
} from "../controllers/enrl.contoller";

import validate from "../middlewares/validate.middleware";

import {
  createEnrollmentSchema,
  updateEnrollmentSchema
} from "../validators/enrol.validator";

const router = express.Router();

router.post("/", validate(createEnrollmentSchema), createEnrollment);

router.get("/", getEnrollments);

router.get("/:enroll_id", getEnrollmentById);

router.put(
  "/:enroll_id",
  validate(updateEnrollmentSchema),
  updateEnrollment
);

router.delete("/:enroll_id", deleteEnrollment);

export default router;