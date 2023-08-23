import { CustomError } from "../../helpers";
import { CategoryModel, ProductModel } from "../../models";

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.find({}).populate("brands").exec();
    return res.status(200).json({ success: true, result: category });
  } catch (error) {
    console.log(error);
   throw new CustomError('Something went wrong!', 500);
  }
};
export const getSingleCategory = async (req, res) => {
    const id = req.params.id;
    try {
      const products = await ProductModel.find({category:id}).populate('brands colors.color').exec();
      const category = await CategoryModel.findById(id).populate('brands').exec();
      if (!category) {
        return res
          .status(201)
          .json({ success: false, msg: "Not found the category" });
      }
      const result = {
        ...category._doc,
        products
      }
      return res.status(200).json({ success: true, result });
    } catch (error) {
        console.log(error);
        throw new CustomError('Something went wrong!', 500);
    }
  };