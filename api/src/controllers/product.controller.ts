import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { getProductsService, createProductService } from "../services/product.service";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    return res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ statusCode: 400, message: error.message });
    }
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock, category } = req.body;

    if (!name || !price || !stock || !category) return res.status(400).send({ message: "Failed creating product: name, price, stock and category are required", statusCode: 400 });

    const newProduct = await createProductService({ name, price, description, stock, category })

    return res.status(201).json({ product: newProduct });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ statusCode: 400, message: error.message });
    }
  }
}
