import { DataSource } from "typeorm";
import {
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
  RESTART_SCHEMA,
} from "./envs";
import { User } from "../entities/User";
import { Shopcart } from "../entities/Shopcart";
import { Role } from "../entities/Role";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { Ingredient } from "../entities/Ingredient";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: DATABASE_PORT as unknown as number,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    synchronize: RESTART_SCHEMA,
    logging: ["error"],
    // logging: true,
    entities: [Ingredient, User, Shopcart, Role, Product, Category],
    subscribers: [], 
    migrations: [],
    dropSchema: RESTART_SCHEMA
});

export const IngredientModel = AppDataSource.getRepository(Ingredient);
export const UserModel = AppDataSource.getRepository(User);
export const CategoryModel = AppDataSource.getRepository(Category);
export const ProductModel = AppDataSource.getRepository(Product);
