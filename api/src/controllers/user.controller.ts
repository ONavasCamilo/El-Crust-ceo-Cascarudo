import { Request, Response } from "express";
import { User } from "../entities/User";
import { comparePasswords, hashPassword } from "../utils/passwordManager";

export const registerUser = async (req: Request, res: Response) => {
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

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    if (!password) throw new Error("Password is required");
    if (!username && !email) throw new Error("Username or email is required");

    const user = username ? await User.findOneBy({ username }) : await User.findOneBy({ email });

    if (!user) return res.status(404).send({ status: 404, error: "User not found" });

    const passwordIsCorrect = await comparePasswords(password, user.password);

    if (!passwordIsCorrect) return res.status(401).send({ status: 401, error: "Incorrect credentials" });

    return res.json({ user });
  } catch (e) {
    if (e instanceof Error) {
      console.log("error:", e.message);
      res.status(400).json({ message: e.message });
    }
  }
}