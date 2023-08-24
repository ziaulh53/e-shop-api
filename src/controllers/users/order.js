import { uuid } from "uuidv4";
import { OrderModel } from "../../models";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const createOrder = async(req, res)=>{
    const {token, shippingAddress, billingAddress, user} = req.body;
    try {
        const customer = await stripe.customers.create({
            email: user?.email,
            source: token
        })
        console.log(customer)
        // const idempotencyKey = uuid();
        // const charge = await stripe.charges.create({
        //     amount,
        //     currency: 'usd',
        //     source,

        // }, {idempotencyKey})
        //  await OrderModel.create();
    } catch (error) {
        console.log(error)
    }
}

