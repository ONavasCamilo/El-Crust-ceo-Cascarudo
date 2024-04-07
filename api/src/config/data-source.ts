import { DataSource } from "typeorm";
import { passwordCamilo, usernameCamilo } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: usernameCamilo,
    password: passwordCamilo,
    database: "test",
    // synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})