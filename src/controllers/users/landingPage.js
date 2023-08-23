import { LandingPageModel } from "../../models";

export const getLandingPage = async (req, res) => {
  try {
    const result = await LandingPageModel.find().populate('trendings').exec();
    return res.status(200).json({ success: true, result: result[0] || {} });
  } catch (error) {
    console.log(error.message);
    return res
      .status(403)
      .json({ success: false, msg: "Something went wrong" });
  }
};
