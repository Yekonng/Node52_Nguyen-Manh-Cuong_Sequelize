import User from "./user.model.js";
import Restaurant from "./restaurant.model.js";
import FoodType from "./food_type.model.js";
import Food from "./food.model.js";
import SubFood from "./sub_food.model.js";
import Order from "./order.model.js";
import LikeRes from "./like_res.model.js";
import RateRes from "./rate_res.model.js";

/* =========================
   ĐỊNH NGHĨA CÁC ASSOCIATION
========================= */

// 1. FoodType 1 - n Food
FoodType.hasMany(Food, { foreignKey: "type_id" });
Food.belongsTo(FoodType, { foreignKey: "type_id" });

// 2. Food 1 - n SubFood
Food.hasMany(SubFood, { foreignKey: "food_id" });
SubFood.belongsTo(Food, { foreignKey: "food_id" });

// 3. User 1 - n Order
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// 4. Food 1 - n Order
Food.hasMany(Order, { foreignKey: "food_id" });
Order.belongsTo(Food, { foreignKey: "food_id" });

// 5. User n - n Restaurant (qua LikeRes)
User.belongsToMany(Restaurant, {
  through: LikeRes,
  foreignKey: "user_id",
});
Restaurant.belongsToMany(User, {
  through: LikeRes,
  foreignKey: "res_id",
});

// 🔹 Bổ sung:
LikeRes.belongsTo(User, { foreignKey: "user_id" });
LikeRes.belongsTo(Restaurant, { foreignKey: "res_id" });


// 6. User n - n Restaurant (qua RateRes)
User.belongsToMany(Restaurant, {
  through: RateRes,
  foreignKey: "user_id",
});
Restaurant.belongsToMany(User, {
  through: RateRes,
  foreignKey: "res_id",
});

// 🔹 Bổ sung:
RateRes.belongsTo(User, { foreignKey: "user_id" });
RateRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export {
  User,
  Restaurant,
  FoodType,
  Food,
  SubFood,
  Order,
  LikeRes,
  RateRes,
};
