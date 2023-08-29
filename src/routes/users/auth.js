import express from 'express';
import { changeEmail, changeEmailRequest, changePassword, forgetPassword, login, register, resetPassword, updateProfile } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();


router.post("/register", register)
router.post("/login", login)
router.post("/forget-password", forgetPassword)
router.post("/reset-password", resetPassword)
router.post("/edit-profile",authorization, updateProfile)
router.post("/change-email-request", authorization, changeEmailRequest)
router.post("/change-password", authorization, changePassword)
router.post("/change-email", changeEmail)


export default router;