import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    items: [],
    shhippingAddress: {
      type: Object,
      required: true,
    },
    billingAddress: {
      type: Object,
      required: true,
    },
    payment: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("orders", OrderSchema);
