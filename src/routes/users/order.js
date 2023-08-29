import express from 'express';
import { createOrder, getOrders, getSingleOrder, updateStatus } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();

router.get("/", authorization, getOrders)
router.get("/:id", authorization, getSingleOrder)
router.post("/create", authorization, createOrder)
router.put("/update-status/:id", authorization, updateStatus)


export default router;