import { Router } from "express";
import { registerUser, loginUser, getUsers, getUser } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/find", getUser);

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/test", verifyToken, (req, res, next) => { // route for test verifyToken, delete when verifyToken is used in another route
  res.send("ola");
});

export default userRouter;