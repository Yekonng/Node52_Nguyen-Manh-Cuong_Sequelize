import { Order, User, Food } from "../models/index.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";

export const orderService = {
  async createOrder({ user_id, food_id, amount, arr_sub_id }) {
    // 1️⃣ Kiểm tra user có tồn tại không
    const user = await User.findByPk(user_id);
    if (!user) throw new BadRequestException("User không tồn tại");

    // 2️⃣ Kiểm tra món ăn có tồn tại không
    const food = await Food.findByPk(food_id);
    if (!food) throw new BadRequestException("Món ăn không tồn tại");

    // 3️⃣ Kiểm tra số lượng
    if (!amount || amount <= 0) {
      throw new BadRequestException("Số lượng món ăn không hợp lệ");
    }

    // 4️⃣ Tạo mã đơn hàng
    const code = `ORD-${Date.now()}`;

    // 5️⃣ Tạo order
    const order = await Order.create({
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id: arr_sub_id || null,
    });

    return order;
  },
};
