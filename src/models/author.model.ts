import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    author_id: {
      type: Number,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    country: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema);