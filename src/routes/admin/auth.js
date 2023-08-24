import express from 'express';
import { adminCreate, adminForgetPassword, adminLogin, adminResetPassword, getAllAdmins } from '../../controllers';
import { authorizationAdmin} from '../../middleware';


const router = express.Router();


router.post("/create-admin", authorizationAdmin,adminCreate)
router.post("/login", adminLogin)
router.post("/forget-password", adminForgetPassword)
router.post("/reset-password", adminResetPassword)
router.get("/",authorizationAdmin, getAllAdmins)


export default router;