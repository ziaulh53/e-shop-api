import jwt from "jsonwebtoken";
import { CustomError } from "../helpers";
import { AdminModel } from "../models";

const secretKey = "123456Zh";

export const authorization = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const {_id} = jwt.verify(token, secretKey);
    const admin = await AdminModel.findById(_id);
    if (!admin) {
      throw new CustomError("Unauthorized", 401);
    }
    req.body = {
      ...req.body,
      admin,
    };
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized", success: false });
  }
};
