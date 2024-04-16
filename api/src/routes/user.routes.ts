import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/test", verifyToken, (req, res, next) => { // route for test verifyToken, delete when verifyToken is used in another route
  res.send("ola");
});

export default userRouter;