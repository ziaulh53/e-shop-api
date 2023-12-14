import { v4 } from "uuid";
import { OrderModel, ProductModel } from "../../models";
import uniqid from 'uniqid';

const SSK =
  "sk_test_51NiaBnG5LWC441mfG5iQbJADmdDYM3XncuwwhYoHmk1B4vuLCqN5Qgi5qTlp6o9ia5UEA8nnxNsw6eWWOBp00TKB00CLr736Ij";
const stripe = require("stripe")(SSK);
// console.log(process.env.STRIPE_SECRET_KEY, 'xc')
export const createOrder = async (req, res) => {
  const { token, shippingAddress, billingAddress, user, items } = req.body;

  // calculate total price and store productid

  try {
    const { isStockout, totalPrice } = await inVentoryCheckedAndUpdate(items);
    if(isStockout){
        return res.status(200).json({success: false, msg: "Stock out", isStockout});
    }
    const charge = await stripePayment({user, token, totalPrice})
    if (!charge?.status === "succeeded") {
      return res.status(401).json({ success: false, msg: "Payment failed" });
    }
    const orderData = {
      user: user?._id,
      shippingAddress,
      billingAddress,
      payment: {
        cardType: charge?.payment_method_details?.card?.brand,
        cardNo: charge?.payment_method_details?.card?.last4,
        cardFunding: charge?.payment_method_details?.card?.funding,
        chargeId: charge?.id,
      },
      items,
      orderId: `ESHOP-${uniqid.time()}`.toUpperCase()
    };
    await OrderModel.create({ ...orderData });
    return res
      .status(201)
      .json({ success: true, msg: "Order created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const stripePayment = async ({ user, token, totalPrice }) => {
  try {
    const customer = await stripe.customers.create({
      email: user?.email,
      source: token?.id,
    });
    const idempotencyKey = v4();
    const charge = await stripe.charges.create(
      {
        amount: Math.round(totalPrice+80) * 100,
        currency: "usd",
        customer: customer.id,
      },
      { idempotencyKey }
    );
    return charge;
  } catch (error) {
    console.log(error);
  }
};

const inVentoryCheckedAndUpdate = async (items) => {
  try {
    let totalPrice = 0,
      isStockout = false;
    const productIds = items?.map((pr) => {
      totalPrice +=
        (pr?.discountAvailable ? pr?.discountPrice : pr?.price) * pr?.quantity;
      return pr?._id;
    });
    const products = await ProductModel.find({ _id: { $in: productIds } });
    const updateQuantities = items.map((it) => {
      const colors = products.find(
        (pr) => String(pr?._id) === String(it._id)
      ).colors;
      const color = colors?.find(
        (color) => String(color?._id) === String(it?.colors?._id)
      );
      if (it?.quantity > color?.quantity) {
        isStockout = true;
      }
      return {quantity:color?.quantity - it?.quantity, colorsId:color?._id };
    });
    if (!isStockout) {
      updateQuantity(productIds, updateQuantities, items);
    }
    return { totalPrice, isStockout };
  } catch (error) {}
};

const updateQuantity = (productIds, updateQuantities) => {
  productIds.forEach(async (documentId, idx) => {
    await ProductModel.updateOne(
      { _id: documentId, "colors._id": updateQuantities[idx].colorsId },
      { $set: { "colors.$.quantity": updateQuantities[idx].quantity } }
    );
  });
};

//get orders
export const getOrders = async (req,res)=>{
  const { user } = req.body;
  const {status} = req.query
  let query = {
    user: user?._id
  }
  if(status){
    query.status = status
  }
  try {
    const result = await OrderModel.find(query);
    return res.status(200).json({success: true, result})
  } catch (error) {
    console.log(error)
  }
}
export const getSingleOrder = async (req,res)=>{
  const id = req.params.id;
  try {
    const result = await OrderModel.findById(id);
    return res.status(200).json({success: true, result})
  } catch (error) {
    console.log(error)
  }
}

export const updateStatus = async (req,res)=>{
  const id = req.params.id;
  const {status} = req.body;
  try {
    await OrderModel.findByIdAndUpdate(id, {status});
    return res.status(200).json({success: true, msg: status==='Cancelled'?"Order Cancelled":"Order status updated"})
  } catch (error) {
    console.log(error)
  }
}
