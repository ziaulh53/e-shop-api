import { AddressModel } from "../../models"

export const getAddress = async (req, res)=>{
    const { user } = req.body
   try {
     const result = await AddressModel.find({user: user?._id });
     return res.status(200).json({success: true, result});
   } catch (error) {
     console.log(error.message)
   }
}

export const createAddress = async (req, res)=>{
    const { user, address } = req.body
   try {
     await AddressModel.create({...address, user: user?._id});
     return res.status(201).json({success: true, msg: "Address added"});
   } catch (error) {
     console.log(error.message)
   }
}
export const editAddress = async (req, res)=>{
    const { address } = req.body
    const id = req.params.id
   try {
     await AddressModel.findByIdAndUpdate(id,{...address});
     return res.status(201).json({success: true, msg: "Address Updated"});
   } catch (error) {
     console.log(error.message)
   }
}

export const deleteAddress = async (req, res)=>{
    const id = req.params.id
   try {
     await AddressModel.findByIdAndDelete(id);
     return res.status(201).json({success: true, msg: "Address Deleted"});
   } catch (error) {
     console.log(error.message)
   }
}