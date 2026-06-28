import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    publisher_id: {
      type: Number,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const Publisher = mongoose.model("Publisher", publisherSchema);