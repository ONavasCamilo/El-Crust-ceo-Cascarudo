import { Router } from "express";
import { verifyToken } from "../middlewares/auth";
import { addProductController } from "../controllers/shopcart.controller";

const router = Router();

router.get('/add-product', verifyToken, addProductController)

export default router;