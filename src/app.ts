import 'module-alias/register';
import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';

import { Logger } from 'services';
import { initializeDB } from './database';
import { activityRoutes } from './routes/activity';
import cors from 'cors';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server Status
app.use('/api', (req, res) => {
  res.send({ message: 'Server is healthy!' });
});

app.use('/activity', activityRoutes);

// initializeDB();
app.listen(process.env.PORT || 3000, async () => {
  Logger.info(`🚀 Server started on port ${process.env.PORT}!`);
});
