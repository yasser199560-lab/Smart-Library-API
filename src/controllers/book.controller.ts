import { Request, Response } from "express";
import { Book } from "../models/book.model";

// 📌 CREATE BOOK
export const createBook = async (req: Request, res: Response) => {
  try {
    const { book_id, title, price, author_id, publisher_id } = req.body;

    // ✅ validation
    if (!book_id || !title || !author_id || !publisher_id) {
      return res.status(400).json({
        message: "book_id, title, author_id, publisher_id are required"
      });
    }

    const existingBook = await Book.findOne({ book_id });

    if (existingBook) {
      return res.status(400).json({
        message: "book_id already exists"
      });
    }

    const book = await Book.create({
      book_id,
      title,
      price,
      author_id,
      publisher_id
    });

    return res.status(201).json(book);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating book",
      error: error.message
    });
  }
};
export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Book.find().sort({ book_id: 1 });

    return res.json(books);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error fetching books",
      error: error.message
    });
  }
};
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { book_id } = req.params;

    const book = await Book.findOne({ book_id: Number(book_id) });

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    return res.json(book);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error fetching book",
      error: error.message
    });
  }
};
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { book_id } = req.params;

    const book = await Book.findOneAndUpdate(
      { book_id: Number(book_id) },
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    return res.json(book);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error updating book",
      error: error.message
    });
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { book_id } = req.params;

    const book = await Book.findOneAndDelete({
      book_id: Number(book_id)
    });

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    return res.json({
      message: "Book deleted successfully"
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error deleting book",
      error: error.message
    });
  }
};