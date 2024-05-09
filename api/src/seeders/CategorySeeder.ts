import { InsertResult } from "typeorm";
import { Category } from "../entities/Category";
import { Categories } from "../interfaces/category.enum";

const INITIAL_CATEGORIES = [
  Categories.DRINK,
  Categories.BURGER,
  Categories.SIDE,
]

export const seedCategories = (): Promise<InsertResult>[] => {
  const categoriesPromises = INITIAL_CATEGORIES.map(category => Category.insert({ category }));
  return categoriesPromises;
};