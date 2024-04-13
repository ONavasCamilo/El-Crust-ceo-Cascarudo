import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/envs";
import { SessionRequest } from "../interfaces/auth.interface";

export const verifyToken = async (req: SessionRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ msg: "No token provided" });
  const tokenString = Array.isArray(token) ? token[0] : token; // fuck typescript.

  try {
    const decoded = jwt.verify(tokenString, SECRET);
    req.session = decoded;
    next();

  } catch (error) {
    return res.status(500).send({ error })
  }
}