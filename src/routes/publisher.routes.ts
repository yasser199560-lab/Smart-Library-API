import express from "express";
import {
  createPublisher,
  getPublishers,
  getPublisherById,
  updatePublisher,
  deletePublisher
} from "../controllers/pub.controller";

import validate from "../middlewares/validate.middleware";

import {
  createPublisherSchema,
  updatePublisherSchema
} from "../validators/publish.validator";

const router = express.Router();

// Create Publisher
router.post("/", validate(createPublisherSchema), createPublisher);

// Get All Publishers
router.get("/", getPublishers);

// Get Publisher By ID
router.get("/:publisher_id", getPublisherById);

// Update Publisher
router.put(
  "/:publisher_id",
  validate(updatePublisherSchema),
  updatePublisher
);

// Delete Publisher
router.delete("/:publisher_id", deletePublisher);

export default router;