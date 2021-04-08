/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

const staticFolder = 'public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use(express.static(staticFolder));



import {
  Sequelize
} from "sequelize";
const sequelize = new Sequelize({
  username: 'student',
  password: 'INST377@UMD',
  host:'3.236.243.212',
  database:'weather_db',
  dialect: 'mysql',
  ssl: 'Amazon RDS',
  pool: {maxConnections: 5, maxIdleTime: 30},
  language: 'en'
  
});
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
