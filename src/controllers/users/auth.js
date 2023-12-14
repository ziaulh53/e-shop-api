import jwt from "jsonwebtoken";
import { UserModel, WishModel } from "../../models";
import bcrypt from "bcryptjs";
import {
  PasswordChangeRequest,
  ResetPasswordTemplate,
  WelcomeTemplate,
  sendEmail,
} from "../../helpers";

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
    await WishModel.create({ user: response?._id, products: [] });

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
      const { firstName, lastName, _id, phone, email, avatar = "" } = user;
      const response = {
        firstName,
        lastName,
        email,
        _id,
        phone,
        avatar,
      };
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

export const updateProfile = async (req, res) => {
  const { user, profileData } = req.body;
  try {
    const foundUser = await UserModel.findById(user?._id);
    if (!foundUser) {
      return res.status(200).json({ success: false, msg: "User not found" });
    }
    await UserModel.findByIdAndUpdate(user?._id, { ...profileData });
    return res.status(200).json({ success: true, msg: "Profile updated" });
  } catch (error) {
    console.log(error);
  }
};

export const changeEmailRequest = async (req, res) => {
  const { user, newEmail, password } = req.body;
  try {
    const foundUser = await UserModel.findById(user?._id);
    if (!foundUser) {
      return res.status(200).json({ success: false, msg: "User not found!" });
    }
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res
        .status(200)
        .json({ success: false, msg: "Password mismatch!" });
    }
    const response = {
      email: newEmail,
      _id: foundUser._id,
    };
    const token = jwt.sign({ ...response }, secretKey);
    const emailTemplate = PasswordChangeRequest(token);
    const subject = "Change Email";
    await sendEmail(newEmail, subject, emailTemplate);
    return res
      .status(200)
      .json({ success: true, msg: "We have sent a link in your new email" });
  } catch (error) {
    console.log(error);
  }
};

export const changeEmail = async (req, res) => {
  const { security_key } = req.body;
  const { _id, email } = jwt.verify(security_key, secretKey);
  try {
    const foundUser = await UserModel.findById(_id);
    if (!foundUser) {
      return res.status(200).json({ success: false, msg: "User not found!" });
    }
    foundUser.email = email;
    await foundUser.save();
    return res
      .status(200)
      .json({ success: true, msg: "Email updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (req, res) => {
  const { user, currentPassword, newPassword } = req.body;
  try {
    const foundUser = await UserModel.findById(user?._id);
    if (!foundUser) {
      return res.status(200).json({ success: false, msg: "User not found!" });
    }
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      foundUser.password
    );
    if (!passwordMatch) {
      return res
        .status(200)
        .json({ success: false, msg: "Password mismatch!" });
    }
    const hashPassword = await bcrypt.hash(newPassword, 12);
    await UserModel.findByIdAndUpdate(user?._id, { password: hashPassword });
    return res.status(200).json({ success: true, msg: "Password updated" });
  } catch (error) {
    console.log(error);
  }
};
