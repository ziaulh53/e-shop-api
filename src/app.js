import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import helmet from "helmet";
import connectDB from "./config/db";
import bodyParser from 'body-parser';
import { adminAuthRoute, brandRoute, authRoute, categoryRoute, userRoute} from './routes'

dotenv.config({ path: "./.env" });
connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

// users
app.use('/auth', authRoute);


// admin
app.use('/admin', adminAuthRoute)
app.use('/admin/brand', brandRoute)
app.use('/admin/category', categoryRoute)
app.use('/admin/user', userRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server running'))