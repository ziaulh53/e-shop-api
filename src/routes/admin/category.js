import express from 'express';
import { createCategoryAdmin, deleteCategoryAdmin, editCategoryAdmin, getCategoryAdmin, getSingleCategoryAdmin } from '../../controllers';
import { authorizationAdmin} from '../../middleware';


const router = express.Router();

router.get("/", authorizationAdmin, getCategoryAdmin)
router.get("/:id", authorizationAdmin, getSingleCategoryAdmin)
router.post("/create", authorizationAdmin, createCategoryAdmin)
router.put("/edit/:id", authorizationAdmin, editCategoryAdmin)
router.delete("/delete/:id", authorizationAdmin, deleteCategoryAdmin)


export default router;