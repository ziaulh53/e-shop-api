import { CustomError } from "../../helpers";
import { UserModel } from "../../models";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json({ success: true, result: users });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};