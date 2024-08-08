import { DataSource } from "typeorm";
import { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "."


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432, //despues cambiarlo de DB_PORT pero no me funca ahora xd
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    dropSchema: false,
    // logging: false,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
})