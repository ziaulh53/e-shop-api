import express from "express";
import {
  createBrandAdmin,
  deleteBrandAdmin,
  editBrandAdmin,
  getBrandsAdmin,
} from "../../controllers";
import { authorizationAdmin} from "../../middleware";

const router = express.Router();

router.post("/create", authorizationAdmin, createBrandAdmin);
router.put("/edit/:id", authorizationAdmin, editBrandAdmin);
router.delete("/delete/:id", authorizationAdmin, deleteBrandAdmin);
router.get("/", authorizationAdmin, getBrandsAdmin);

export default router;
