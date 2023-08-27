import express from 'express';
import { createOrder, getOrders } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();

router.get("/", authorization, getOrders)
router.post("/create", authorization, createOrder)


export default router;