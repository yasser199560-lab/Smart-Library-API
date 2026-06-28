import express from "express";
import {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} from "../controllers/author.controller";

import validate from "../middlewares/validate.middleware";
import {
  createAuthorSchema,
  updateAuthorSchema
} from "../validators/author.validator";

const router = express.Router();

router.post("/", validate(createAuthorSchema), createAuthor);

router.get("/", getAuthors);

router.get("/:author_id", getAuthorById);

router.put("/:author_id", validate(updateAuthorSchema), updateAuthor);

router.delete("/:author_id", deleteAuthor);

export default router;