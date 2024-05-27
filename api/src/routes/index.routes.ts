import { Router } from "express";
import userRouter from "./user.routes";
import productRouter from "./product.routes";
import shopcartRouter from "./shopcart.routes"

const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/shopcart", shopcartRouter);

export default router;