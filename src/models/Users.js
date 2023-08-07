import mongoose from "mongoose";


const UserSchema =  new mongoose.Schema({
    firstName: {
        type:  String,
        required: true
    },
    lastName: {
        type:  String,
        required: true
    },
    email: {
        type:  String,
        required: true
    },
    phone: {
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
    }
}, {timestamps: true})

export default mongoose.model('users', UserSchema);