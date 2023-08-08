import mongoose from "mongoose";
import { adminRole } from "../constant/adminRole";


const AdminSchema =  new mongoose.Schema({
    fullName: {
        type:  String,
        required: true
    },
    email: {
        type:  String,
        required: true
    },
    password: {
        type:  String,
        required: true
    },
    avater: {
        type: String,
        required: false
    },
    role:{
        type: String,
        enum: [adminRole.super, adminRole.admin],
        default: adminRole.admin
    }
}, {timestamps: true})

export default mongoose.model('admin', AdminSchema);