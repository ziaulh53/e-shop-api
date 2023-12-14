import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("wishlist", WishSchema);
