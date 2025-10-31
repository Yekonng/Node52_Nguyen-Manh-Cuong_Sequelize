import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const RateRes = sequelize.define(
  "rate_res",
  {
    user_id: DataTypes.INTEGER,
    res_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    date_rate: DataTypes.DATE,
  },
  {
    tableName: "rate_res",
    timestamps: false,
  }
);

export default RateRes;