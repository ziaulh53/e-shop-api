import express from 'express';
import { authorizationAdmin} from '../../middleware';
import { getLandingPageAdmin, updateBanners, updateTrendings } from '../../controllers';


const router = express.Router();

router.get("/", authorizationAdmin, getLandingPageAdmin)
router.post("/banner", authorizationAdmin, updateBanners)
router.post("/trending", authorizationAdmin, updateTrendings)


export default router;