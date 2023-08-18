import mongoose from "mongoose";

const ColorSchema = new mongoose.Schema({
  colorName: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("colors", ColorSchema);
