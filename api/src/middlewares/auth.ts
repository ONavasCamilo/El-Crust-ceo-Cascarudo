import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/envs";
import { ISession, SessionRequest } from "../interfaces/auth.interface";
import { Role } from "../entities/Role";

export const verifyToken = async (req: SessionRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ msg: "No token provided" });
  const tokenString = Array.isArray(token) ? token[0] : token; // fuck typescript.

  try {
    const decoded = jwt.verify(tokenString, SECRET);
    req.session = decoded as ISession;
    next();

  } catch (error) {
    return res.status(500).send({ error })
  }
}

export const isAdmin = async (req: SessionRequest, res: Response, next: NextFunction) => {
  if (!req.session) return res.status(404).json({ msg: "No session found" })
  try {
    const adminRol = await Role.findOneBy({ role: "admin" });
    if (!adminRol) throw new Error("Internal error"); // -> when this happen that means we dont have the table "roles" with the default values.
    // TODO: check if user exists too?

    if (adminRol.id === req.session.role.id) {
      return next();
    }

    return res.status(401).json({ msg: "Unauthorized" })

  } catch (error) {
    return res.status(500).send({ error })
  }
}