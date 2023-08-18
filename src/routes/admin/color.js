import express from 'express';
import { authorization } from '../../middleware';
import { createColor, deleteColor, editColor, getColors, } from '../../controllers';


const router = express.Router();

router.get("/", authorization, getColors)
router.post("/create", authorization, createColor)
router.put("/edit/:id", authorization, editColor)
router.delete("/delete/:id", authorization, deleteColor)


export default router;