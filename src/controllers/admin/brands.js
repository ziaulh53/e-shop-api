import { CustomError } from "../../helpers";
import { BrandModel } from "../../models";

export const getBrandsAdmin = async (req, res) => {
  try {
    const brands = await BrandModel.find({});
    return res.status(200).json({ success: true, result: brands });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};
export const createBrandAdmin = async (req, res) => {
  try {
    const { name, logo } = req.body;
    if (!name) {
      return res.status(201).json({ success: false, msg: "Invalid input" });
    }
    const isExist = await BrandModel.findOne({ name });
    if (isExist) {
      return res
        .status(201)
        .json({ success: false, msg: "The brand is already exist" });
    }
    await BrandModel.create({ name, logo });
    return res
      .status(200)
      .json({ success: true, msg: `${name} added into brand list` });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};

export const editBrandAdmin = async (req, res) => {
  const id = req.params.id;
  const { name, logo } = req.body;
  try {
    const foundBrand = await BrandModel.findById(id);
    if (!foundBrand) {
      return res
        .status(201)
        .json({ success: false, msg: "Not found the brand" });
    }
    if (name) foundBrand.name = name;
    if (logo) foundBrand.logo = logo;
    await foundBrand.save();
    return res.status(200).json({ success: true, msg: "Update successfully" });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};

export const deleteBrandAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const foundBrand = await BrandModel.findById(id);
    if (!foundBrand) {
      return res
        .status(201)
        .json({ success: false, msg: "Not found the brand" });
    }
    await foundBrand.deleteOne();
    return res.status(200).json({ success: true, msg: "Delete successfully" });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};
