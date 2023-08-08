import { CustomError } from "../../helpers";
import { CategoryModel } from "../../models";

export const getCategoryAdmin = async (req, res) => {
  try {
    const category = await CategoryModel.find({}).populate("brands").exec();
    return res.status(200).json({ success: true, result: category });
  } catch (error) {
    console.log(error);
   throw new CustomError('Something went wrong!', 500);
  }
};
export const getSingleCategoryAdmin = async (req, res) => {
    const id = req.params.id;
    try {
      const category = await CategoryModel.findById(id);
      if (!category) {
        return res
          .status(201)
          .json({ success: false, msg: "Not found the category" });
      }
      return res.status(200).json({ success: true, result: category });
    } catch (error) {
        console.log(error);
        throw new CustomError('Something went wrong!', 500);
    }
  };


export const createCategoryAdmin = async (req, res) => {
  try {
    const { name, coverImage="", brands= [] } = req.body;
    if(!name || !brands){
      return res.status(201).json({ success: false, msg: "Invalid input" });
    }
    const isExist = await CategoryModel.findOne({ name });
    if (isExist) {
      return res.status(201).json({ success: false, msg: "The category is already exist" });
    }
    await CategoryModel.create({ name, coverImage, brands });
    return res
      .status(200)
      .json({ success: true, msg: `${name} added into category list` });
  } catch (error) {
    console.log(error);
    throw new CustomError('Something went wrong!', 500);
  }
};

export const editCategoryAdmin = async (req, res) => {
  const id = req.params.id;
  const { name, logo } = req.body;
  try {
    const foundBrand = await CategoryModel.findById(id);
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
    throw new CustomError('Something went wrong!', 500);
  }
};

export const deleteCategoryAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const foundBrand = await CategoryModel.findById(id);
    if (!foundBrand) {
      return res
        .status(201)
        .json({ success: false, msg: "Not found the brand" });
    }
    await foundBrand.deleteOne();
    return res.status(200).json({ success: true, msg: "Delete successfully" });
  } catch (error) {
    console.log(error);
    throw new CustomError('Something went wrong!', 500);
  }
};
