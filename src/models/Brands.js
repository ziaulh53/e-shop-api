import mongoose from "mongoose";

const BrandsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    }
}, {timestamps: true})

export default mongoose.model('brands', BrandsSchema);