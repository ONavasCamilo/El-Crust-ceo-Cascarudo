import { Product } from "../entities/Product";
import { CreateProduct } from './../interfaces/product.interface';
import { CategoryModel, IngredientModel } from "../config/data-source";
import { Categories } from "../interfaces/category.enum";

const INITIAL_PRODUCTS: CreateProduct[] = [
  {
    "name": "Coca Cola Grande",
    "price": 2.5,
    "stock": 50,
    "category": Categories.DRINK,
  },
  {
    "name": "Coca Cola Mediana",
    "price": 2,
    "stock": 50,
    "category": Categories.DRINK,
  },
  {
    "name": "Coca Cola Pequeña",
    "price": 1,
    "stock": 50,
    "category": Categories.DRINK,
  },
  {
    "name": "Cangreburger Pequeña",
    "price": 2,
    "stock": 50,
    "category": Categories.BURGER,
  },
  {
    "name": "Cangreburger mediana",
    "price": 4,
    "stock": 45,
    "category": Categories.BURGER,
  },
  {
    "name": "Cangreburger grande",
    "price": 8,
    "stock": 30,
    "category": Categories.BURGER,
  }
]

export const seedProducts = async () => {
  const categories = await CategoryModel.find();
  const ingredients = await IngredientModel.find();

  const productPromises = INITIAL_PRODUCTS.map(product => {
    let actualIngredients = undefined;
    if (product.category === Categories.BURGER) {
      actualIngredients = ingredients.find(ing => ing);
    }

    const objProduct = {
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: categories.find(cat => cat.category === product.category),
      ingredients: actualIngredients
    }

    return Product.insert(objProduct)
  });

  return productPromises;
};