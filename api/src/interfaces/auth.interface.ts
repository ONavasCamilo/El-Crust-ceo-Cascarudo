import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface SessionRequest extends Request {
  session?: ISession;
}

export interface ISession extends JwtPayload {
  id: number;
  role: {
    id: number;
    role: string;
  };
}
