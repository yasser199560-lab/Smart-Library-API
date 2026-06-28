import express from "express";
import {
  createMember,
  getMembers
} from "../controllers/member.controller";

import validate from "../middlewares/validate.middleware";
import {
  createMemberSchema,
  updateMemberSchema
} from "../validators/member.validator";

const router = express.Router();

router.post("/", validate(createMemberSchema), createMember);

router.get("/", getMembers);

export default router;