import express from 'express';
import { authorization } from '../../middleware';
import { createProduct, deleteProductAdmin, editProduct, getProduct } from '../../controllers';


const router = express.Router();

router.get("/", authorization, getProduct)
router.post("/create", authorization, createProduct)
router.put("/edit/:id", authorization, editProduct)
router.delete("/delete/:id", authorization, deleteProductAdmin)


export default router;