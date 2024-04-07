import express from "express";
import morgan from 'morgan'
import pingRouter from "./routes/ping.routes";

const app = express();

app.use(express.json());
app.use(morgan('dev'))

app.use("/ping", pingRouter)

export default app