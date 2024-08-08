import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

const PORT: Number| string = process.env.PORT || "3000";
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_TYPE = process.env.DB_TYPE || "postgres"
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_PORT = process.env.DB_PORT || 5432
const DB_USERNAME = process.env.DB_USERNAME || "test"
const DB_PASSWORD = process.env.DB_PASSWORD || "test"
const DB_NAME = process.env.DB_NAME || "test"

export { PORT, PROTO, HOST, DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME };