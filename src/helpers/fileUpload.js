import { cloudinaryBucket } from "../config/cloudanry";

export const singleFileUpload = async (req, res) => {
  try {
    const result = await cloudinaryBucket.uploader.upload(req.file.path);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ success: false, msg:'Something went wrong' });
  }
};
