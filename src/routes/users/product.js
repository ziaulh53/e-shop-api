import express from 'express';
import { getNewArrivalProduct, getProductOnBrand, getSingleProduct, getSuggestionProduct } from '../../controllers';


const router = express.Router();

router.get("/suggestion", getSuggestionProduct)
router.get("/new-arrival", getNewArrivalProduct)
router.get("/brands/:id", getProductOnBrand)
router.get("/:id", getSingleProduct)


export default router;