import { ColorModel } from "../../models"

export const getColors = async (req, res)=>{
    try {
        const result = await ColorModel.find({});
        return res.status(200).json({success: true, result});
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, msg: 'Something went wrong'});
    }

}

export const createColor = async (req, res)=>{
    const {colorName, colorCode} = req.body;
    try {
        await ColorModel.create({colorName, colorCode});
        return res.status(200).json({success: true, msg: 'Color created'})
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, msg: 'Something went wrong'});
    }
    
}
export const editColor = async (req, res)=>{
    const id = req.params.id;
    const {colorData} = req.body;
    try {
        await ColorModel.findByIdAndUpdate(id, {...colorData});
        return res.status(200).json({success: true, msg: 'Update successfully'});
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, msg: 'Something went wrong'});
    }
    
}

export const deleteColor = async (req, res)=>{
    const id = req.params.id;
    try {
        await ColorModel.findByIdAndDelete(id);
        return res.status(200).json({success: true, msg: 'Color deleted successfully'});
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, msg: 'Something went wrong'});
    }
}