import mongoose from "mongoose";

const LandingPageSchema = new mongoose.Schema({
  banners: [],
  trendings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
});

export default mongoose.model("landing", LandingPageSchema);
