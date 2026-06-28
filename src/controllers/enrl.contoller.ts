import { Request, Response } from "express";
import { Enrollment } from "../models/enrollment.model";
import { Member } from "../models/member.model";
import { Course } from "../models/course.model";

// Create Enrollment
export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const { enroll_id, member_id, course_id, progress } = req.body;

    if (!enroll_id || !member_id || !course_id) {
      return res.status(400).json({
        message: "enroll_id, member_id and course_id are required"
      });
    }

    // Check Member
    const member = await Member.findOne({ member_id });

    if (!member) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    // Check Course
    const course = await Course.findOne({ course_id });

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    // Prevent duplicate enrollment
    const exists = await Enrollment.findOne({
      member_id,
      course_id
    });

    if (exists) {
      return res.status(400).json({
        message: "Member already enrolled in this course"
      });
    }

    const enrollment = await Enrollment.create({
      enroll_id,
      member_id,
      course_id,
      progress: progress ?? 0
    });

    res.status(201).json(enrollment);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All
export const getEnrollments = async (_req: Request, res: Response) => {
  try {
    const enrollments = await Enrollment.find().sort({ enroll_id: 1 });

    res.json(enrollments);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get By ID
export const getEnrollmentById = async (req: Request, res: Response) => {
  try {
    const enrollment = await Enrollment.findOne({
      enroll_id: Number(req.params.enroll_id)
    });

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found"
      });
    }

    res.json(enrollment);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Progress
export const updateEnrollment = async (req: Request, res: Response) => {
  try {
    const enrollment = await Enrollment.findOneAndUpdate(
      {
        enroll_id: Number(req.params.enroll_id)
      },
      req.body,
      {
        new: true
      }
    );

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found"
      });
    }

    res.json(enrollment);

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete
export const deleteEnrollment = async (req: Request, res: Response) => {
  try {
    const enrollment = await Enrollment.findOneAndDelete({
      enroll_id: Number(req.params.enroll_id)
    });

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found"
      });
    }

    res.json({
      message: "Enrollment deleted successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};