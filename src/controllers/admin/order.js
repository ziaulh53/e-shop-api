import { v4 } from "uuid";
import { OrderModel } from "../../models";
import uniqid from 'uniqid';

const SSK =
  "sk_test_51NiaBnG5LWC441mfG5iQbJADmdDYM3XncuwwhYoHmk1B4vuLCqN5Qgi5qTlp6o9ia5UEA8nnxNsw6eWWOBp00TKB00CLr736Ij";
const stripe = require("stripe")(SSK);
// console.log(process.env.STRIPE_SECRET_KEY, 'xc')


//get orders
export const getOrdersAdmin = async (req,res)=>{
  try {
    const result = await OrderModel.find().populate('user');
    return res.status(200).json({success: true, result})
  } catch (error) {
    console.log(error)
  }
}
export const getSingleOrderAdmin = async (req,res)=>{
  const id = req.params.id;
  try {
    const result = await OrderModel.findById(id).populate('user');
    return res.status(200).json({success: true, result})
  } catch (error) {
    console.log(error)
  }
}

export const updateStatusAdmin = async (req,res)=>{
  const id = req.params.id;
  const {status} = req.body;
  try {
    await OrderModel.findByIdAndUpdate(id, {status});
    return res.status(200).json({success: true, msg: status==='Cancelled'?"Order Cancelled":"Order status updated"})
  } catch (error) {
    console.log(error)
  }
}
