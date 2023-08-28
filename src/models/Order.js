import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    orderId: String,
    items: [],
    totalPrice: Number,
    shippingAddress: {
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
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Shipped', 'Cancelled', 'Delivered'],
      default: 'Pending'
    }
  },
  { timestamps: true }
);

export default mongoose.model("orders", OrderSchema);
