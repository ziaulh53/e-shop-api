import express from 'express';
import { addWishItem, getWishItems } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();

router.get("/", authorization, getWishItems)
router.post("/create", authorization, addWishItem)


export default router;