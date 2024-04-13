import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET } from "../config/envs";

interface CustomRequest extends Request {
  session?: string | JwtPayload; 
}

export const verifyToken = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.token;

  if (!token) return res.status(403).json({ msg: "No token provided" });
  const tokenString = Array.isArray(token) ? token[0] : token; // fuck typescript.

  try {
    const decoded = jwt.verify(tokenString, SECRET);
    console.log(decoded);
    req.session = decoded;
    next();

  } catch (error) {
    return res.status(500).send({ error })
  }
}