import { Sequelize } from 'sequelize';

const databaseName = process.env.DBNAME;
const databaseUserName = process.env.DBUSERNAME;
const databasePassword = process.env.DBPASSWORD;
const sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
  host: '127.0.0.1',
  dialect: 'mysql',
});

export const connectMySQL = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
  } catch (error) {
  }
};

export default sequelize;