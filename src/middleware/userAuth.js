import jwt from "jsonwebtoken";
import { CustomError } from "../helpers";
import { UserModel } from "../models";

const secretKey = "123456Zh";

export const authorization = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const {_id} = jwt.verify(token, secretKey);
    const user = await UserModel.findById(_id);
    if (!user) {
      throw new CustomError("Unauthorized", 401);
    }
    req.body = {
      ...req.body,
      user,
    };
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ msg: "Unauthorized", success: false });
  }
};
