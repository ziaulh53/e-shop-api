import { ProductModel } from "../../models";

export const getProductsAdmin = async (req, res) => {
  // const category = req.body.categoryId;
  try {
    const result = await ProductModel.find().populate('category').exec();
    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const { productData } = req.body;
  try {
    const result = await ProductModel.create(productData);
    if (result._id) {
      return res
        .status(200)
        .json({ success: true, msg: "Product created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (req, res) => {
  const { productData } = req.body;
  const id = req.params.id;
  try {
    const result = await ProductModel.findByIdAndUpdate(id,{...productData});
    if (result._id) {
      return res
        .status(200)
        .json({ success: true, msg: "Product Updated successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const foundProduct = await ProductModel.findById(id);
    if (!foundProduct) {
      return res
        .status(201)
        .json({ success: false, msg: "Not found the brand" });
    }
    await foundProduct.deleteOne();
    return res.status(200).json({ success: true, msg: "Delete successfully" });
  } catch (error) {
    console.log(error);
    throw new CustomError("Something went wrong!", 500);
  }
};
