import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course_id: {
      type: Number,
      required: true,
      unique: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    instructor: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const Course = mongoose.model("Course", courseSchema);