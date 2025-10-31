import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const SubFood = sequelize.define(
  "sub_food",
  {
    sub_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_name: DataTypes.STRING(100),
    sub_price: DataTypes.FLOAT,
    food_id: DataTypes.INTEGER, // FK tới food
  },
  {
    tableName: "sub_food",
    timestamps: false,
  }
);

export default SubFood;