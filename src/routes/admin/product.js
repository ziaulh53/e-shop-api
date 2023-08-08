import express from 'express';
import { authorization } from '../../middleware';


const router = express.Router();

router.get("/", authorization)
router.get("/:id", authorization)
router.post("/create", authorization)
router.put("/edit/:id", authorization)
router.delete("/delete/:id", authorization)


export default router;