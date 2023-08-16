import { ProductModel } from "../../models"

export const getProduct = async (req,res)=>{
    const category = req.body.categoryId;
    try {
        const result = await ProductModel.find({category})
        return res.status(201).json({success: true, result})
    } catch (error) {
        console.log(error)
    }
}