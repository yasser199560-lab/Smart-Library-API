import { Request, Response } from "express";
import { MembershipCard } from "../models/membershipCard.model";

// Create Membership Card
export const createMembershipCard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membershipCard = await MembershipCard.create(req.body);

    res.status(201).json({
      success: true,
      message: "Membership card created successfully.",
      data: membershipCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create membership card.",
      error,
    });
  }
};

// Get All Membership Cards
export const getAllMembershipCards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membershipCards = await MembershipCard.find();

    res.status(200).json({
      success: true,
      count: membershipCards.length,
      data: membershipCards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve membership cards.",
      error,
    });
  }
};

// Get Membership Card By card_id
export const getMembershipCardById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membershipCard = await MembershipCard.findOne({
      card_id: Number(req.params.card_id),
    });

    if (!membershipCard) {
      res.status(404).json({
        success: false,
        message: "Membership card not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: membershipCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve membership card.",
      error,
    });
  }
};

// Update Membership Card
export const updateMembershipCard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membershipCard = await MembershipCard.findOneAndUpdate(
      { card_id: Number(req.params.card_id) },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!membershipCard) {
      res.status(404).json({
        success: false,
        message: "Membership card not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Membership card updated successfully.",
      data: membershipCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update membership card.",
      error,
    });
  }
};

// Delete Membership Card
export const deleteMembershipCard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membershipCard = await MembershipCard.findOneAndDelete({
      card_id: Number(req.params.card_id),
    });

    if (!membershipCard) {
      res.status(404).json({
        success: false,
        message: "Membership card not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Membership card deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete membership card.",
      error,
    });
  }
};