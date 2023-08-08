import express from 'express';
import { adminCreate, adminForgetPassword, adminLogin, adminResetPassword, getAllAdmins } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();


router.post("/create-admin", adminCreate)
router.post("/login", adminLogin)
router.post("/forget-password", adminForgetPassword)
router.post("/reset-password", adminResetPassword)
router.get("/",authorization, getAllAdmins)


export default router;