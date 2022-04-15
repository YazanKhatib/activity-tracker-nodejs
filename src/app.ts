import 'module-alias/register';
import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';

import cors from 'cors';
import { Logger } from 'services';
import { initializeDB } from './database';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDB();
app.listen(process.env.PORT || 3000, async () => {
  Logger.info(`🚀 Server started on port ${process.env.PORT}!`);
});
