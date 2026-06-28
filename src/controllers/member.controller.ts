import { Request, Response } from "express";
import { Member } from "../models/member.model";

// CREATE MEMBER
export const createMember = async (req: Request, res: Response) => {
  try {
    const { member_id, full_name, email } = req.body;

    if (!member_id || !full_name || !email) {
      return res.status(400).json({
        message: "member_id, full_name, email are required"
      });
    }

    const exists = await Member.findOne({ member_id });

    if (exists) {
      return res.status(400).json({
        message: "member_id already exists"
      });
    }

    const member = await Member.create({
      member_id,
      full_name,
      email
    });

    return res.status(201).json(member);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating member",
      error: error.message
    });
  }
};

// GET ALL MEMBERS
export const getMembers = async (_req: Request, res: Response) => {
  try {
    const members = await Member.find().sort({ member_id: 1 });
    return res.json(members);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error fetching members",
      error: error.message
    });
  }
};