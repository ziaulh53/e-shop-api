import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import helmet from "helmet";
import connectDB from "./config/db";
import bodyParser from 'body-parser'
import { authRoute } from "./routes";

dotenv.config({ path: "./.env" });
connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use('/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server running'))