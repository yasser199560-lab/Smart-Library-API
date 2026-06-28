import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from "../controllers/book.controller";

import validate from "../middlewares/validate.middleware";
import {
  createBookSchema,
  updateBookSchema
} from "../validators/book.validator";

const router = express.Router();

router.post("/", validate(createBookSchema), createBook);

router.get("/", getBooks);

router.get("/:book_id", getBookById);

router.put("/:book_id", validate(updateBookSchema), updateBook);

router.delete("/:book_id", deleteBook);

export default router;