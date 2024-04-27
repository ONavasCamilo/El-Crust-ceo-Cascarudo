import { NextFunction, Request, Response } from "express";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, description, stock, category } = req.body;

    if (!name || !price || !stock || !category) return res.status(400).send({ message: "Failed creating product: name, price, stock and category are required", statusCode: 400 });
    const selectedCategory = await Category.findOneBy({ category });

    if (!selectedCategory)  return res.status(400).send({ message: "Failed creating product: category not found", statusCode: 400 });
    // TODO: check what happen if the product is burger. we should create another route for burgers?

    const newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.stock = stock;
    newProduct.category = selectedCategory;

    await newProduct.save();

    return res.status(201).json({ product: newProduct });
  } catch (e) {
    if (e instanceof Error) {
      return next({ statusCode: 400, message: e.message });
    }
    next(e);
  }
};

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find({ relations: ["category"] });

    return res.json({ products });
  } catch (error) {
    if (error instanceof Error) {
      return next({ statusCode: 400, message: error.message });
    }
    next(error);
  }
};
