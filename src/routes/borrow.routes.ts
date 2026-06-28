import express from "express";
import {
  createBorrow,
  getBorrows,
  returnBorrow
} from "../controllers/borrow.controller";

import validate from "../middlewares/validate.middleware";
import {
  createBorrowSchema
} from "../validators/borrow.validator";

const router = express.Router();

router.post("/", validate(createBorrowSchema), createBorrow);

router.get("/", getBorrows);

router.patch("/:borrow_id/return", returnBorrow);

export default router;