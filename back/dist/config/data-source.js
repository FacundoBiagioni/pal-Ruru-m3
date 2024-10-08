"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: _1.DB_HOST,
    port: 5432,
    username: _1.DB_USERNAME,
    password: _1.DB_PASSWORD,
    database: _1.DB_NAME,
    synchronize: false,
    dropSchema: false,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
});
