import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { comparePasswords, hashPassword } from "../utils/passwordManager";
import { SECRET } from "../config/envs";
import { Role } from "../entities/Role";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) return res.status(401).send({ message: "Username, password and email are required fields.", statusCode: 401});

    const role = await Role.findOneBy({ role: "user" });
    if (!role) return res.status(500).send({ msg: "Internal Error", status: 500 }); // -> when this happen that means we dont have the table "roles" with the default values.

    const newUser = new User()

    newUser.username = username;
    newUser.password = await hashPassword(password);
    newUser.email = email;
    newUser.role = role;

    await newUser.save();
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, SECRET, { expiresIn: 86400 });

    return res.status(201).json({ token });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).send({ msg: e.message, status: 500 });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    if (!password) return res.status(400).send({ status: 400, error: "Password is required" });
    if (!username && !email) return res.status(400).send({ status: 400, error: "Username or email is required" });

    const userFound = username
      ? await User.findOne({ where: { username }, relations: ["role"] })
      : await User.findOne({ where: { email }, relations: ["role"] });

    if (!userFound) return res.status(404).send({ status: 404, error: "User not found" });

    const passwordIsCorrect = await comparePasswords(password, userFound.password);

    if (!passwordIsCorrect) return res.status(401).send({ status: 401, error: "Incorrect credentials" });

    const token = jwt.sign({ id: userFound.id, role: userFound.role }, SECRET, { expiresIn: 86400 });

    return res.json({ token });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    }
  }
}