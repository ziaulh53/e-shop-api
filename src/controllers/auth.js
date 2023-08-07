import jwt from "jsonwebtoken";
import { UserModel } from "../models";
import bcrypt from "bcryptjs";
import { ResetPasswordTemplate, WelcomeTemplate, sendEmail } from "../helpers";

const secretKey = "123456Zh";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    if (!email) {
      return res.status(404).json({ msg: "User input not valid" });
    }
    const existUser = await UserModel.findOne({ email });
    if (existUser?._id) {
      return res
        .status(200)
        .json({ success: false, msg: "Email already exist!" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const user = {
      firstName,
      lastName,
      password: hashPassword,
      email,
      phone,
    };
    const response = await UserModel.create({ ...user });

    if (response?._id) {
      const emailTemplate = WelcomeTemplate();
      const subject = "Registration confirmation";
      await sendEmail(email, subject, emailTemplate);
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(201)
        .json({ success: false, msg: "Email doesn't exist" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const {firstName, lastName, _id, phone, email, avater=''} =user;
        const response = {
            firstName,
            lastName,
            email,
            _id,
            phone,
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

export const forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({ success: false, msg: "User not found" });
    }
    delete user.password;
    const token = jwt.sign({ ...user }, secretKey);
    const emailTemplate = ResetPasswordTemplate(token);
    const subject = "Reset your password";
    await sendEmail(email, subject, emailTemplate);
    return res
      .status(200)
      .json({ success: true, msg: "Reset url sent to email" });
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { newPassword, token } = req.body;
    const { email } = jwt.verify(token, secretKey)._doc;
    const hashPassword = await bcrypt.hash(newPassword, 12);
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({ success: false, msg: "User not found" });
    }
    await UserModel.findOneAndUpdate({ email }, { password: hashPassword });
    return res.status(200).json({ success: true, msg: "Password updated" });
  } catch (error) {
    console.log(error);
  }
};
