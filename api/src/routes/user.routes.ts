import { Router } from "express";
import { registerUser, loginUser, getUsers, getUser, deleteUser } from "../controllers/user.controller";
import { verifyToken, isAdmin } from "../middlewares/auth";

const userRouter = Router();

userRouter.get("/", [verifyToken, isAdmin], getUsers);

userRouter.get("/find", getUser);

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.put("/delete", [verifyToken, isAdmin], deleteUser)

export default userRouter;