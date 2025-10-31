import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Restaurant = sequelize.define(
  "restaurant",
  {
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    res_name: DataTypes.STRING(100),
    image: DataTypes.STRING(255),
    desc: DataTypes.STRING(255),
  },
  {
    tableName: "restaurant",
    timestamps: false,
  }
);

export default Restaurant;