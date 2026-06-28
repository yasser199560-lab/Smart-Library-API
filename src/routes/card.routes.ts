import express from "express";

import {
  createMembershipCard,
  getAllMembershipCards,
  getMembershipCardById,
  updateMembershipCard,
  deleteMembershipCard,
} from "../controllers/mcard.controller";

const router = express.Router();

// Create Membership Card
router.post("/", createMembershipCard);

// Get All Membership Cards
router.get("/", getAllMembershipCards);

// Get Membership Card by card_id
router.get("/:card_id", getMembershipCardById);

// Update Membership Card
router.put("/:card_id", updateMembershipCard);

// Delete Membership Card
router.delete("/:card_id", deleteMembershipCard);

export default router;