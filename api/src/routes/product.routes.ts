import { Router } from "express";
import { isAdmin, verifyToken } from "../middlewares/auth";
import { createProduct, getProducts } from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", getProducts);

productRouter.post("/create", createProduct);

export default productRouter;