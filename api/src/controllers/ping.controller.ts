import { Request, Response } from "express";
import { pingServices } from "../services/ping.services";

export const pingController = (req: Request, res: Response) => {
  try {
    const ping = pingServices();
    res.status(200).json(ping);
  } catch (e) {
    if (e instanceof Error) {
      console.log("error:", e.message);
      res.status(400).json({ message: e.message });
    }
  }
};
