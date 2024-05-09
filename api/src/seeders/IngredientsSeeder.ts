import { InsertResult } from "typeorm";
import { IngredientModel } from "../config/data-source";

const INITIAL_INGREDIENTS = [
  {
    cheese: 3,
    meat: 2,
    lettuce: 1,
    tomato: 2,
  },
  {
    cheese: 2,
    meat: 1,
    lettuce: 1,
    onion: 1,
  }
]

export const seedIngredients = (): Promise<InsertResult>[] => {
  const ingredientsPromises = INITIAL_INGREDIENTS.map(ingredients => IngredientModel.insert({ ...ingredients }));
  return ingredientsPromises;
};