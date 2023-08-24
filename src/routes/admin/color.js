import express from 'express';
import { authorizationAdmin} from '../../middleware';
import { createColor, deleteColor, editColor, getColors, } from '../../controllers';


const router = express.Router();

router.get("/", authorizationAdmin, getColors)
router.post("/create", authorizationAdmin, createColor)
router.put("/edit/:id", authorizationAdmin, editColor)
router.delete("/delete/:id", authorizationAdmin, deleteColor)


export default router;