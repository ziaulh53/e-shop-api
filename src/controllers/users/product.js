import { ProductModel } from "../../models";

export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await ProductModel.findById(id).populate('category brands colors.color').exec();
    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};


