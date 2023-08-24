import express from 'express';
import { authorizationAdmin} from '../../middleware';
import { getLandingPage } from '../../controllers';


const router = express.Router();

router.get("/", getLandingPage)


export default router;