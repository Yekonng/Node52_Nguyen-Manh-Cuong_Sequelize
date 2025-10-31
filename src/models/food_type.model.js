import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const FoodType = sequelize.define(
  "food_type",
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: DataTypes.STRING(100),
  },
  {
    tableName: "food_type",
    timestamps: false,
  }
);

export default FoodType;