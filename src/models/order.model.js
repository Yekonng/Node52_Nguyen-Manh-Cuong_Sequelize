import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Order = sequelize.define(
  "order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    code: DataTypes.STRING(50),
    arr_sub_id: DataTypes.STRING(100),
  },
  {
    tableName: "order",
    timestamps: false,
  }
);

export default Order;