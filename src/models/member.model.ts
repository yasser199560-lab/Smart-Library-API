import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    member_id: {
      type: Number,
      required: true,
      unique: true
    },

    full_name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    join_date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

// ✅ IMPORTANT EXPORT (fixes your error)
export const Member = mongoose.model("Member", memberSchema);