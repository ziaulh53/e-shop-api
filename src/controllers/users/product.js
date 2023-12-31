import { Schema } from "mongoose";
import { ProductModel } from "../../models";

export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const result = await ProductModel.findById(id)
        .populate("category brands colors.color")
        .exec();
      return res.status(201).json({ success: true, result });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSuggestionProduct = async (req, res) => {
  const { productId, categoryId } = req.query;
  try {
    const result = await ProductModel.find({
      category: categoryId,
      _id: { $ne: productId },
    }).populate("colors.color");
    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

export const getNewArrivalProduct = async (req, res) => {
  try {
    const result = await ProductModel.find({
      newArrival: true,
    });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

export const getProductOnBrand = async (req, res) => {
  const brandId = req.params.id;
  try {
    const result = await ProductModel.find({
      brands: brandId,
    });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};
