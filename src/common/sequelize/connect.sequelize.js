import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../constant/app.constant.js";

DATABASE_URL
const sequelize = new Sequelize(DATABASE_URL, { logging: true })

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize