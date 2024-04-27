import { ProductModel, CategoryModel } from "../config/data-source";
import { CreateProduct } from "../interfaces/product.interface";

export const getProductsService = async () => {
  const products = await ProductModel.find({ relations: ["category"] });
  return products
}

export const createProductService = async ({ name, price, description, stock, category }: CreateProduct) => {
  const selectedCategory = await CategoryModel.findOneBy({ category });

  if (!selectedCategory) throw new Error("Failed creating product: category not found");
  // TODO: check what happen if the product is burger. we should create another route for burgers?

  const newProduct = ProductModel.create({ name, price, description, stock, category: selectedCategory });
  await newProduct.save();
  return newProduct;
}