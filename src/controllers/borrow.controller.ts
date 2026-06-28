import { Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";
import { Member } from "../models/member.model";

// 📌 CREATE BORROW
export const createBorrow = async (req: Request, res: Response) => {
  try {
    const { borrow_id, member_id, book_id } = req.body;

    // validation
    if (!borrow_id || !member_id || !book_id) {
      return res.status(400).json({
        message: "borrow_id, member_id, book_id are required"
      });
    }

    // check member exists
    const memberExists = await Member.findOne({ member_id });
    if (!memberExists) {
      return res.status(404).json({ message: "Member not found" });
    }

    // check book exists
    const bookExists = await Book.findOne({ book_id });
    if (!bookExists) {
      return res.status(404).json({ message: "Book not found" });
    }

    // prevent duplicate borrow (same book not returned yet)
    const alreadyBorrowed = await Borrow.findOne({
      member_id,
      book_id,
      return_date: null
    });

    if (alreadyBorrowed) {
      return res.status(400).json({
        message: "Book already borrowed by this member"
      });
    }

    const borrow = await Borrow.create({
      borrow_id,
      member_id,
      book_id,
      borrow_date: new Date()
    });

    return res.status(201).json(borrow);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating borrow",
      error: error.message
    });
  }
};
export const getBorrows = async (_req: Request, res: Response) => {
  try {
    const borrows = await Borrow.find().sort({ borrow_id: 1 });

    return res.json(borrows);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error fetching borrows",
      error: error.message
    });
  }
};export const returnBorrow = async (req: Request, res: Response) => {
  try {
    const { borrow_id } = req.params;

    const borrow = await Borrow.findOne({ borrow_id: Number(borrow_id) });

    if (!borrow) {
      return res.status(404).json({
        message: "Borrow record not found"
      });
    }

    if (borrow.return_date) {
      return res.status(400).json({
        message: "Book already returned"
      });
    }

    borrow.return_date = new Date();

    await borrow.save();

    return res.json({
      message: "Book returned successfully",
      borrow
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error returning book",
      error: error.message
    });
  }
};