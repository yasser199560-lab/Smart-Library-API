import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    book_id: {
      type: Number,
      required: true,
      unique: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      default: 0
    },

    author_id: {
      type: Number,
      required: true
    },

    publisher_id: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

// ✅ IMPORTANT EXPORT
export const Book = mongoose.model("Book", bookSchema);