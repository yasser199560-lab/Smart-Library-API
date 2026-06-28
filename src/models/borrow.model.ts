import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema(
  {
    borrow_id: {
      type: Number,
      required: true,
      unique: true
    },

    member_id: {
      type: Number,
      required: true
    },

    book_id: {
      type: Number,
      required: true
    },

    borrow_date: {
      type: Date,
      default: Date.now
    },

    return_date: {
      type: Date,
      default: null
    },

    is_returned: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const Borrow = mongoose.model("Borrow", borrowSchema);