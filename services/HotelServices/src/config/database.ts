import { Sequelize } from 'sequelize';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_NAME: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_HOST: string;
        }
    }
}

const DB_NAME: string = process.env.DB_NAME || 'hms';
const DB_USER: string = process.env.DB_USER || 'root';
const DB_PASSWORD: string = process.env.DB_PASSWORD || 'root';
const DB_HOST: string = process.env.DB_HOST || 'localhost';

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'mysql'
    }
);