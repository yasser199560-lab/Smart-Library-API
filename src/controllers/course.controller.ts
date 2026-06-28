import { Request, Response } from "express";
import { Course } from "../models/course.model";

// Create Course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { course_id, title, instructor } = req.body;

    if (!course_id || !title || !instructor) {
      return res.status(400).json({
        message: "course_id, title and instructor are required"
      });
    }

    const exists = await Course.findOne({ course_id });

    if (exists) {
      return res.status(400).json({
        message: "Course ID already exists"
      });
    }

    const course = await Course.create({
      course_id,
      title,
      instructor
    });

    res.status(201).json(course);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Courses
export const getCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Course.find().sort({ course_id: 1 });

    res.json(courses);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Course By ID
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findOne({
      course_id: Number(req.params.course_id)
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json(course);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findOneAndUpdate(
      {
        course_id: Number(req.params.course_id)
      },
      req.body,
      {
        new: true
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json(course);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findOneAndDelete({
      course_id: Number(req.params.course_id)
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json({
      message: "Course deleted successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};