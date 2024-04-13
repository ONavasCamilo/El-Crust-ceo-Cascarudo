import { Request, Response } from "express";
import { User } from "../entities/User";
import { hashPassword } from "../utils/passwordManager";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) throw new Error("Username, password and email are required fields.");

    const user = new User()

    user.username = username;
    user.password = await hashPassword(password);;
    user.email = email;

    await user.save();

    return res.status(201).send(user);
  } catch (e) {
    if (e instanceof Error) {
      console.log("error:", e.message);
      res.status(400).json({ message: e.message });
    }
  }
};
