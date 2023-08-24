import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import helmet from "helmet";
import connectDB from "./config/db";
import bodyParser from 'body-parser';
import { authRoute, categoryRoute, productRoute, landingRoute, authRouteAdmin, brandRouteAdmin, categoryRouteAdmin, userRouteAdmin, productRouteAdmin, colorRouteAdmin, landingRouteAdmin, orderRoute} from './routes'
import { singleFileUpload } from "./helpers";
import multer from "multer";

dotenv.config({ path: "./.env" });
connectDB();

const app = express();




app.use(cors());
const upload = multer({dest: "/uploads"});
app.use(helmet());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// users
app.use('/auth', authRoute);
app.use('/category', categoryRoute)
app.use('/landing', landingRoute)
app.use('/product', productRoute);
app.use('/order', orderRoute);

// admin
app.use('/admin', authRouteAdmin)
app.use('/admin/brand', brandRouteAdmin)
app.use('/admin/category', categoryRouteAdmin)
app.use('/admin/user', userRouteAdmin);
app.use('/admin/product', productRouteAdmin);
app.use('/admin/color', colorRouteAdmin);
app.use('/admin/landing', landingRouteAdmin)

// file uploader
app.post('/file-upload', upload.single("file"), singleFileUpload);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server running'))