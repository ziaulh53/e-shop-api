import express from 'express';
import { getDahsboardData } from '../../controllers';
import { authorizationAdmin } from '../../middleware';


const router = express.Router();

router.get("/", authorizationAdmin, getDahsboardData)


export default router;