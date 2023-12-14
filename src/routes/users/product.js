import express from 'express';
import { getSingleProduct, getSuggestionProduct } from '../../controllers';


const router = express.Router();

router.get("/suggestion", getSuggestionProduct)
router.get("/:id", getSingleProduct)



export default router;