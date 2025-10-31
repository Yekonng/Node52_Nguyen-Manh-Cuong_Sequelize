import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const LikeRes = sequelize.define(
  "like_res",
  {
    user_id: DataTypes.INTEGER,
    res_id: DataTypes.INTEGER,
    date_like: DataTypes.DATE,
  },
  {
    tableName: "like_res",
    timestamps: false,
  }
);

export default LikeRes;