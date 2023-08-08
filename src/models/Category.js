import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    brands: [
      {
        type: Schema.Types.ObjectId,
        ref: "brands",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("category", CategorySchema);
