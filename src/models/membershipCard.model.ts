import mongoose from "mongoose";

const membershipCardSchema = new mongoose.Schema(
  {
    card_id: {
      type: Number,
      required: true,
      unique: true,
    },

    member_id: {
      type: Number,
      required: true,
      unique: true,
      ref: "Member",
    },

    card_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 20,
    },

    issued_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MembershipCard = mongoose.model(
  "MembershipCard",
  membershipCardSchema
);

