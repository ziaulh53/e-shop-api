import express from 'express';
import { getAllUsers } from '../../controllers';
import { authorizationAdmin} from '../../middleware';


const router = express.Router();

router.get("/", authorizationAdmin, getAllUsers)
// router.get("/:id", authorizationAdmin, getSingleCategoryAdmin)
// router.post("/create", authorizationAdmin, createCategoryAdmin)
// router.put("/edit/:id", authorizationAdmin, editCategoryAdmin)
// router.delete("/delete/:id", authorizationAdmin, deleteCategoryAdmin)


export default router;