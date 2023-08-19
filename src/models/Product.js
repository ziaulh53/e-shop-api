import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    discountAvailable: {
      type: Boolean,
      default: false,
    },
    quantity: { type: Number, default: 0 },
    colors: [
      {
        color: { type: Schema.Types.ObjectId, ref: "colors" },
        quantity: { type: Number, default: 0 },
        images: { type: Array },
      },
    ],
    description: {
      type: String,
    },
    brands: {
      type: Schema.Types.ObjectId,
      ref: "brands",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

export default model("products", ProductSchema);
