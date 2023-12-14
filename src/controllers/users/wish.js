import { ProductModel, UserModel, WishModel } from "../../models";

export const getWishItems = async (req, res) => {
  const { user } = req.body;
  try {
    const result = await WishModel.find({ user: user?._id }).populate(
      "products"
    );
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error.message);
  }
};

export const addWishItem = async (req, res) => {
  const { user, productId } = req.body;
  try {
    // Check if the user and product exist before adding the product to favorites
    const existingUser = await UserModel.findById(user?._id);
    const existingProduct = await ProductModel.findById(productId);

    if (!existingUser || !existingProduct) {
      return res
        .status(200)
        .json({ success: false, msg: "User or product does not exist" });
    }

    // Check if the product is already in the user's favorites
    const existingWishlistItem = await WishModel.findOne({
      user: user?._id,
      products: productId,
    });

    if (existingWishlistItem) {
      return res
        .status(200)
        .json({ success: false, msg: "Product already in wish list" });
    }

    // Add the product reference to the user's favorites
    await WishModel.updateOne(
      { user: user?._id },
      { $push: { products: productId } }
    );

    return res
      .status(201)
      .json({ success: true, msg: "Product added to wishlist successfully" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
};
