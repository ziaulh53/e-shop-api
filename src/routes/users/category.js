import express from 'express';
import { getCategory, getSingleCategory } from '../../controllers';


const router = express.Router();

router.get("/", getCategory)
router.get("/:id", getSingleCategory)


export default router;