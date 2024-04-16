import { InsertResult } from "typeorm";
import { Category } from "../entities/Category";

const INITIAL_CATEGORIES = [
  "drink",
  "burger",
  "sides" // -> acompañamiento, segun chatgpt
]

export const seedCategories = (): Promise<InsertResult>[] => {
  const categoriesPromises = INITIAL_CATEGORIES.map(category => Category.insert({ category }));
  return categoriesPromises;
};