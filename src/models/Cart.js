import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    items: [],
  },
  { timestamps: true }
);

export default mongoose.model("carts", CartSchema);
