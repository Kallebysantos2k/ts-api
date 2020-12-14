import dotenv from 'dotenv';

import database from '.';
import app from './app';
import { IDatabaseProvider } from './providers/IDatabaseProvider';

dotenv.config();
const databaseProvider: IDatabaseProvider = database;

const uri = databaseProvider.generateUri({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSOWRD,
  database: process.env.DB_DATABASE,
});

databaseProvider.connect(uri);

app.start();
