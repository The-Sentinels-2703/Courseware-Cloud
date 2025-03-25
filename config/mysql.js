import { Sequelize } from 'sequelize';
import process from 'process';

const databaseName = process.env.DB_NAME;
const databaseUserName = process.env.DB_USER;
const databasePassword = process.env.DB_PASSWORD;
const sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
  host: '127.0.0.1',
  dialect: 'mysql',
});

export const connectMySQL = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
  } catch (error) {
    throw error;
  }
};

export default sequelize;
