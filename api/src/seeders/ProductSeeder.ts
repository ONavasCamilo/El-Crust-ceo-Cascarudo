import { InsertResult } from "typeorm";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

const INITIAL_ROLES = [
  {
    "name": "Coca Cola Grande",
    "price": 2.5,
    "stock": 50,
    "category": "drink"
  },
  {
    "name": "Coca Cola Mediana",
    "price": 2,
    "stock": 50,
    "category": "drink"
  },
  {
    "name": "Coca Cola Pequeña",
    "price": 1,
    "stock": 50,
    "category": "drink"
  },
]

export const seedProducts = async () => {
  const categories = await Category.find();

  const productPromises = INITIAL_ROLES.map(product => {
    const objProduct = {
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: categories.find(cat => cat.category === product.category)
    }
    return Product.insert(objProduct)
  });

  return productPromises;
};