import { DataSource } from "typeorm";
import { DATABASE_PASSWORD, DATABASE_USERNAME, DATABASE_HOST, DATABASE_NAME } from "./envs";
import { Burger } from "../entities/Burger";
import { User } from "../entities/User";
import { Shopcart } from "../entities/Shopcart";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [Burger, User, Shopcart],
    subscribers: [], 
    migrations: [],
});

export const BurgerModel = AppDataSource.getRepository(Burger);
export const UserModel = AppDataSource.getRepository(User);
export const ShopcartModel = AppDataSource.getRepository(Shopcart);