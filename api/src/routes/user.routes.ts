import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

export default userRouter;