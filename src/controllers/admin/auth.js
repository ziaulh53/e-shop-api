import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AdminModel } from "../../models";
import { AdminResetPasswordTemplate, sendEmail } from "../../helpers";
import { adminRole } from "../../constant/adminRole";

const secretKey = "123456Zh";

export const getAllAdmins = async (req, res) => {
  try {
    const {role } = req.body.admin;
    if (role !== adminRole.super) {
      return res.status(404).json({ msg: "Not allowed" });
    }
    const admins = await AdminModel.find({ role:{$ne: adminRole.super}})
    return res
      .status(200)
      .json({ success: false, result: admins });
  } catch (error) {
    console.log(error);
  }
};

export const adminCreate = async (req, res) => {
  try {
    const { fullName, email, password, role, avater } = req.body;
    if (!email) {
      return res.status(404).json({ msg: "User input not valid" });
    }
    const existAdmin = await AdminModel.findOne({ email });
    if (existAdmin?._id) {
      return res
        .status(200)
        .json({ success: false, msg: "Email already exist!" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const admin = {
      fullName,
      password: hashPassword,
      email,
      role,
      avater
    };
    const response = await AdminModel.create({ ...admin });

    if (response?._id) {
      return res
        .status(200)
        .json({ success: true, msg: "Registration is completed" });
    }
    return res
      .status(200)
      .json({ success: false, msg: "Something went wrong" });
  } catch (error) {
    console.log(error);
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res
        .status(201)
        .json({ success: false, msg: "Email doesn't exist" });
    }
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (passwordMatch) {
        const {fullName, _id, email, avater='', role} =admin;
        const response = {
           fullName,
            email,
            _id,
            role,
            avater
        }
      const token = jwt.sign({ ...response }, secretKey);
      return res
        .status(200)
        .json({ success: true, user: response, token, msg: "Login success" });
    } else {
      return res.status(201).json({ success: false, msg: "Password is wrong" });
    }
  } catch (error) {
    console.log(error);
  } 
};

export const adminForgetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(200).json({ success: false, msg: "Admin not found" });
    }
    delete admin.password;
    const token = jwt.sign({ ...admin }, secretKey);
    const emailTemplate = AdminResetPasswordTemplate(token);
    const subject = "Reset your password";
    await sendEmail(email, subject, emailTemplate);
    return res
      .status(200)
      .json({ success: true, msg: "Reset url sent to email" });
  } catch (error) {
    console.log(error);
  } 
};

export const adminResetPassword = async (req, res) => {
  try {
    const { newPassword, token } = req.body;
    const { email } = jwt.verify(token, secretKey)._doc;
    const hashPassword = await bcrypt.hash(newPassword, 12);
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(200).json({ success: false, msg: "Admin not found" });
    }
    await AdminModel.findOneAndUpdate({ email }, { password: hashPassword });
    return res.status(200).json({ success: true, msg: "Password updated" });
  } catch (error) {
    console.log(error);
  }
};
