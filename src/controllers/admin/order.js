import { v4 } from "uuid";
import { OrderModel } from "../../models";
import uniqid from "uniqid";
import { ISO_8601 } from "moment/moment";

const SSK =
  "sk_test_51NiaBnG5LWC441mfG5iQbJADmdDYM3XncuwwhYoHmk1B4vuLCqN5Qgi5qTlp6o9ia5UEA8nnxNsw6eWWOBp00TKB00CLr736Ij";
const stripe = require("stripe")(SSK);
// console.log(process.env.STRIPE_SECRET_KEY, 'xc')

//get orders
export const getOrdersAdmin = async (req, res) => {
  const { startDate, endDate, orderId, status, email, phone, page } = req.query;
  let filter = {};
  if (startDate) {
    filter = {
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    };
  }
  if (orderId) {
    filter = {
      ...filter,
      orderId: orderId,
    };
  }
  if (status) {
    filter = {
      ...filter,
      status: status,
    };
  }
  if (email) {
    filter = {
      ...filter,
      "user.email": email,
    };
  }
  if (phone) {
    filter = {
      ...filter,
      "shippingAddress.phone": phone,
    };
  }
  try {
    const pripeline = [
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $match: {
          ...filter,
        },
      },
      { $setWindowFields: { output: { totalCount: { $count: {} } } } },
      { $skip: (page - 1 || 0) * 1 },
      { $limit: 15 },
    ];

    const result = await OrderModel.aggregate(pripeline);
    return res.status(200).json({ success: true, result: {orders: result, count: result[0]?.totalCount || 0 } });
  } catch (error) {
    console.log(error);
  }
};
export const getSingleOrderAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await OrderModel.findById(id).populate("user");
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatusAdmin = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  try {
    await OrderModel.findByIdAndUpdate(id, { status });
    return res.status(200).json({
      success: true,
      msg: status === "Cancelled" ? "Order Cancelled" : "Order status updated",
    });
  } catch (error) {
    console.log(error);
  }
};
