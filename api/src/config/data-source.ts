import { DataSource } from "typeorm";
import {
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
  RESTART_SCHEMA,
} from "./envs";
import { Burger } from "../entities/Burger";
import { User } from "../entities/User";
import { Shopcart } from "../entities/Shopcart";
import { Role } from "../entities/Role";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    synchronize: RESTART_SCHEMA,
    logging: true,
    entities: [Burger, User, Shopcart, Role],
    subscribers: [], 
    migrations: [],
    dropSchema: RESTART_SCHEMA
});

export const BurgerModel = AppDataSource.getRepository(Burger);
export const UserModel = AppDataSource.getRepository(User);
export const ShopcartModel = AppDataSource.getRepository(Shopcart);
export const RoleModel = AppDataSource.getRepository(Role);