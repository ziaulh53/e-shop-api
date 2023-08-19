import express from 'express';
import { authorization } from '../../middleware';
import { getLandingPage, updateBanners, updateTrendings } from '../../controllers';


const router = express.Router();

router.get("/", authorization, getLandingPage)
router.post("/banner", authorization, updateBanners)
router.put("/trending", authorization, updateTrendings)


export default router;