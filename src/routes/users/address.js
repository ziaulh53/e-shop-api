import express from 'express';
import { authorization } from '../../middleware';
import { createAddress, deleteAddress, editAddress, getAddress } from '../../controllers';


const router = express.Router();

router.get("/", authorization, getAddress )
router.post("/create", authorization, createAddress )
router.put("/edit/:id", authorization, editAddress )
router.delete("/delete/:id", authorization, deleteAddress )


export default router;