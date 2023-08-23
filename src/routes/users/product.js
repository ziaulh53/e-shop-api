import express from 'express';
import { getSingleProduct } from '../../controllers';


const router = express.Router();

router.get("/:id", getSingleProduct)


export default router;