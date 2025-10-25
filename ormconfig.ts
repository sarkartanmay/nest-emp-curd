import { DataSource } from 'typeorm';
import { Employee } from './src/employee/employee.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306', 10),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'test_db',
  entities: [Employee],
  migrations: ['migrations/*.ts'],
  synchronize: false, // never use in prod
});
