import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock, category } = req.body;

    if (!name || !price || !stock || !category) return res.status(400).json({ msg: "Failed creating product: name, price, stock and category are required" });
    const selectedCategory = await Category.findOneBy({ category });

    if (!selectedCategory) return res.status(404).json({ msg: "Failed creating product: category not found" });

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
      console.log("error:", e.message);
      res.status(400).json({ message: e.message });
    }
  }
};
