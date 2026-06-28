import { Request, Response } from "express";
import { Author } from "../models/author.model";

// Create Author
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { author_id, name, country } = req.body;

    if (!author_id || !name || !country) {
      return res.status(400).json({
        message: "author_id, name and country are required"
      });
    }

    const existingAuthor = await Author.findOne({ author_id });

    if (existingAuthor) {
      return res.status(400).json({
        message: "Author ID already exists"
      });
    }

    const author = await Author.create({
      author_id,
      name,
      country
    });

    res.status(201).json(author);

  } catch (error: any) {
    res.status(500).json({
      message: "Error creating author",
      error: error.message
    });
  }
};

// Get All Authors
export const getAuthors = async (_req: Request, res: Response) => {
  try {
    const authors = await Author.find().sort({ author_id: 1 });

    res.json(authors);

  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching authors",
      error: error.message
    });
  }
};

// Get Author By ID
export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { author_id } = req.params;

    const author = await Author.findOne({
      author_id: Number(author_id)
    });

    if (!author) {
      return res.status(404).json({
        message: "Author not found"
      });
    }

    res.json(author);

  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching author",
      error: error.message
    });
  }
};

// Update Author
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { author_id } = req.params;

    const author = await Author.findOneAndUpdate(
      { author_id: Number(author_id) },
      req.body,
      { new: true }
    );

    if (!author) {
      return res.status(404).json({
        message: "Author not found"
      });
    }

    res.json(author);

  } catch (error: any) {
    res.status(500).json({
      message: "Error updating author",
      error: error.message
    });
  }
};

// Delete Author
export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { author_id } = req.params;

    const author = await Author.findOneAndDelete({
      author_id: Number(author_id)
    });

    if (!author) {
      return res.status(404).json({
        message: "Author not found"
      });
    }

    res.json({
      message: "Author deleted successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      message: "Error deleting author",
      error: error.message
    });
  }
};