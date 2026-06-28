import { Request, Response } from "express";
import { Publisher } from "../models/publisher.model";

// Create Publisher
export const createPublisher = async (req: Request, res: Response) => {
  try {
    const { publisher_id, name, city } = req.body;

    if (!publisher_id || !name || !city) {
      return res.status(400).json({
        message: "publisher_id, name and city are required"
      });
    }

    const exists = await Publisher.findOne({ publisher_id });

    if (exists) {
      return res.status(400).json({
        message: "Publisher ID already exists"
      });
    }

    const publisher = await Publisher.create({
      publisher_id,
      name,
      city
    });

    return res.status(201).json(publisher);

  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
};

// Get All Publishers
export const getPublishers = async (_req: Request, res: Response) => {
  try {
    const publishers = await Publisher.find().sort({ publisher_id: 1 });

    res.json(publishers);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Publisher By publisher_id
export const getPublisherById = async (req: Request, res: Response) => {
  try {
    const publisher = await Publisher.findOne({
      publisher_id: Number(req.params.publisher_id)
    });

    if (!publisher) {
      return res.status(404).json({
        message: "Publisher not found"
      });
    }

    res.json(publisher);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Publisher
export const updatePublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await Publisher.findOneAndUpdate(
      {
        publisher_id: Number(req.params.publisher_id)
      },
      req.body,
      {
        new: true
      }
    );

    if (!publisher) {
      return res.status(404).json({
        message: "Publisher not found"
      });
    }

    res.json(publisher);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Publisher
export const deletePublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await Publisher.findOneAndDelete({
      publisher_id: Number(req.params.publisher_id)
    });

    if (!publisher) {
      return res.status(404).json({
        message: "Publisher not found"
      });
    }

    res.json({
      message: "Publisher deleted successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};