import express from 'express';
import { getAllUsers } from '../../controllers';
import { authorization } from '../../middleware';


const router = express.Router();

router.get("/", authorization, getAllUsers)
// router.get("/:id", authorization, getSingleCategoryAdmin)
// router.post("/create", authorization, createCategoryAdmin)
// router.put("/edit/:id", authorization, editCategoryAdmin)
// router.delete("/delete/:id", authorization, deleteCategoryAdmin)


export default router;