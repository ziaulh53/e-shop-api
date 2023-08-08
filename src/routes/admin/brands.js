import express from "express";
import {
  createBrandAdmin,
  deleteBrandAdmin,
  editBrandAdmin,
  getBrandsAdmin,
} from "../../controllers";
import { authorization } from "../../middleware";

const router = express.Router();

router.post("/create", authorization, createBrandAdmin);
router.put("/edit/:id", authorization, editBrandAdmin);
router.delete("/delete/:id", authorization, deleteBrandAdmin);
router.get("/", authorization, getBrandsAdmin);

export default router;
