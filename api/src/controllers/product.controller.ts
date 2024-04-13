import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock } = req.body;

    return res.status(201).json({ msg: "Product created" });
  } catch (e) {
    if (e instanceof Error) {
      console.log("error:", e.message);
      res.status(400).json({ message: e.message });
    }
  }
};
