import express from 'express';
import { getOrdersAdmin, getSingleOrderAdmin, updateStatusAdmin } from '../../controllers';
import { authorizationAdmin } from '../../middleware';


const router = express.Router();

router.get("/", authorizationAdmin, getOrdersAdmin)
router.get("/:id", authorizationAdmin, getSingleOrderAdmin)
router.put("/update-status/:id", authorizationAdmin, updateStatusAdmin)


export default router;