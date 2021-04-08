import {
  Sequelize
} from 'sequelize';

const sequelize = new Sequelize({
  username: 'student',
  password: 'INST377@UMD',
  host: '3.236.243.212',
  database: 'weather_db',
  dialect: 'mysql',
  ssl: 'Amazon RDS',
  pool: {maxConnections: 5, maxIdleTime: 30},
  language: 'en'

});
