import express from 'express';
import { authorization } from '../../middleware';
import { getLandingPageAdmin, updateBanners, updateTrendings } from '../../controllers';


const router = express.Router();

router.get("/", authorization, getLandingPageAdmin)
router.post("/banner", authorization, updateBanners)
router.post("/trending", authorization, updateTrendings)


export default router;