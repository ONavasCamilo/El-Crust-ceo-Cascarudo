import { Ingredient } from "../entities/Ingredient";

export interface CreateProduct {
    name: string;
    price: number;
    description?: string | undefined;
    stock: number;
    category: string;
    ingredients?: Ingredient | undefined
}
