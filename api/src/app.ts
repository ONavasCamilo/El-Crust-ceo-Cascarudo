import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan'
import routes from "./routes/index.routes";
import cors from "cors";
// import { ErrorHandler } from "./interfaces/error-handler.interface";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use("/api", routes);

app.use("/", (req, res) => {
  res.status(404).send({ message: `Route ${req.originalUrl} not found` })
});

// app.use((error: ErrorHandler, req: Request, res: Response): void => {
//   console.log("error:")
//   error.status = error.status ?? 500;
//   error.message = error.message ?? "Internal Error";

//   res.status(error.status).json({ message: error.message, status: error.status });
// });

export default app;