import express from 'express';
import { getDahsboardSellingData,  getCategorySellingData} from '../../controllers';
import { authorizationAdmin } from '../../middleware';


const router = express.Router();

router.get("/", authorizationAdmin, getDahsboardSellingData)
router.get("/by-category", authorizationAdmin, getCategorySellingData)


export default router;