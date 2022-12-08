import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" }));
app.use(morgan.("morgan")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})))

