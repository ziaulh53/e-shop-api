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

export const updateBanners = async (req, res) => {
  const banners = req.body.banners;
  try {
    const result = await LandingPageModel.find();
    if (!result.length) {
      await LandingPageModel.create({ banners });
      return res
        .status(200)
        .json({ success: true, msg: "Updated successfully" });
    }
    await LandingPageModel.findByIdAndUpdate(result[0]._id, {
      $set: { banners },
    });
    return res.status(200).json({ success: true, msg: "Updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(403)
      .json({ success: false, msg: "Something went wrong" });
  }
};

export const updateTrendings = async (req, res) => {
  const trendings = req.body.trendings;
  try {
    const result = await LandingPageModel.find({});
    if (!result.length) {
      await LandingPageModel.create({ trendings });
      return res
        .status(200)
        .json({ success: true, msg: "Updated successfully" });
    }
    await LandingPageModel.findByIdAndUpdate(result[0]._id, {
      $set: { trendings },
    });
    return res.status(200).json({ success: true, msg:"Updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(403)
      .json({ success: false, msg: "Something went wrong" });
  }
};
