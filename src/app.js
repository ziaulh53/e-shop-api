import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import helmet from "helmet";
import connectDB from "./config/db";
import bodyParser from 'body-parser';
import { adminAuthRoute, brandRoute, authRoute, categoryRoute, userRoute, productRoute} from './routes'
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


// admin
app.use('/admin', adminAuthRoute)
app.use('/admin/brand', brandRoute)
app.use('/admin/category', categoryRoute)
app.use('/admin/user', userRoute);
app.use('/admin/product', productRoute);

// file uploader
app.post('/file-upload', upload.single("file"), singleFileUpload);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server running'))