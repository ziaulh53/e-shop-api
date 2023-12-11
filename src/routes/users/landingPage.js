import express from "express";
import { getLandingPage, getBrands } from "../../controllers";

const router = express.Router();

router.get("/", getLandingPage);
router.get("/brands", getBrands);

export default router;
