import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Food = sequelize.define(
  "food",
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: DataTypes.STRING(100),
    image: DataTypes.STRING(255),
    price: DataTypes.FLOAT,
    desc: DataTypes.STRING(255),
    type_id: DataTypes.INTEGER, // FK tới food_type
  },
  {
    tableName: "food",
    timestamps: false,
  }
);

export default Food;