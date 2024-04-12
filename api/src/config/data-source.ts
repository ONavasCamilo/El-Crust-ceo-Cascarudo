import { DataSource } from "typeorm";
import {
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
} from "./envs";
import { Burger } from "../entities/Burger";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [Burger, Product],
  subscribers: [],
  migrations: [],
  // dropSchema: true, //! elimina todo de la base de datos
});

export const BurgerRepository = AppDataSource.getRepository(Burger);
export const ProductRepository = AppDataSource.getRepository(Product);
