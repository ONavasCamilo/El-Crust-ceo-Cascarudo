import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { comparePasswords } from "../utils/passwordManager";
import { SECRET } from "../config/envs";
import { deleteUserService, getUserService, getUsersService, loginUserService, registerUserService } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    }
  }
}

export const getUser = async (req: Request, res: Response) => {
  let { id, username, email } = req.query
  try {
    if (!username && !id && !email) return res.status(401).send({ message: "Must send id, username or email.", statusCode: 401 });
    if (username) username = String(username);
    if (email) email = String(email);
    if (id) id = String(id)

    const user = await getUserService({ id, username, email });
    if (!user) return res.status(404).send({ status: 404, error: "User not found" });

    res.status(200).json(user)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message })
    }
  }
}

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) return res.status(401).send({ message: "Username, password and email are required fields.", statusCode: 401 });
    const newUser = await registerUserService({ username, password, email })
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, SECRET, { expiresIn: 86400 });
    return res.status(201).json({ token });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).send({ message: e.message, status: 500 });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    if (!password) return res.status(400).send({ status: 400, message: "Password is required" });
    if (!username && !email) return res.status(400).send({ status: 400, message: "Username or email is required" });

    const userFound = await loginUserService({ username, email })

    if (!userFound) return res.status(404).send({ status: 404, message: "User not found" });

    const passwordIsCorrect = await comparePasswords(password, userFound.password);

    if (!passwordIsCorrect) return res.status(401).send({ status: 401, message: "Incorrect credentials" });

    const token = jwt.sign({ id: userFound.id, role: userFound.role }, SECRET, { expiresIn: 86400 });

    return res.json({ token });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    let { id, username, email } = req.body

    if (!username && !id && !email) return res.status(401).send({ message: "Must send id, username or email.", statusCode: 401 });

    await deleteUserService({ id, username, email });

    res.json({ msg: "User removed succesfully." });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "User not found") return res.status(404).json({ message: error.message })

      res.status(500).json({ message: error.message });
    }
  }
}