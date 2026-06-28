import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    enroll_id: {
      type: Number,
      required: true,
      unique: true
    },

    member_id: {
      type: Number,
      required: true
    },

    course_id: {
      type: Number,
      required: true
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    }
  },
  {
    timestamps: true
  }
);

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);