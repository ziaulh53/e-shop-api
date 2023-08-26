import express from 'express';
import { createOrder } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();

router.post("/create", authorization, createOrder)


export default router;