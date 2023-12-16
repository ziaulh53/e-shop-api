import express from 'express';
import { getNewArrivalProduct, getSingleProduct, getSuggestionProduct } from '../../controllers';


const router = express.Router();

router.get("/suggestion", getSuggestionProduct)
router.get("/new-arrival", getNewArrivalProduct)
router.get("/:id", getSingleProduct)


export default router;