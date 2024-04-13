import { Router } from "express";
import { isAdmin, verifyToken } from "../middlewares/auth";
import { createProduct } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/create", [verifyToken, isAdmin], createProduct);

export default productRouter;