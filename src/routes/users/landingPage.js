import express from 'express';
import { authorization } from '../../middleware';
import { getLandingPage } from '../../controllers';


const router = express.Router();

router.get("/", getLandingPage)


export default router;