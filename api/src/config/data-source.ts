import { DataSource } from "typeorm";
import { DATABASE_PASSWORD, DATABASE_USERNAME, DATABASE_HOST } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: "test",
    // synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})