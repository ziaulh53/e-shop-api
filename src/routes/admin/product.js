import express from 'express';
import { authorizationAdmin} from '../../middleware';
import { createProduct, deleteProductAdmin, editProduct, getProductsAdmin } from '../../controllers';


const router = express.Router();

router.get("/", authorizationAdmin, getProductsAdmin)
router.post("/create", authorizationAdmin, createProduct)
router.put("/edit/:id", authorizationAdmin, editProduct)
router.delete("/delete/:id", authorizationAdmin, deleteProductAdmin)


export default router;