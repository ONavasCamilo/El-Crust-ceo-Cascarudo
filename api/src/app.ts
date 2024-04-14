import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan'
import routes from "./routes/index.routes";
import { ErrorHandler } from "./interfaces/error-handler.interface";

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", routes);

app.all("*", (req, _, next) => {
  next({ message: `Route ${req.originalUrl} not found`, statusCode: 404 });
});

app.use((err: ErrorHandler, _: Request, res: Response): void => {
  err.statusCode = err.statusCode ?? 500;
  err.message = err.message ?? "Internal Error";
  console.error(err);
  res.status(err.statusCode).json({ message: err.message, status: err.statusCode });
});

export default app;