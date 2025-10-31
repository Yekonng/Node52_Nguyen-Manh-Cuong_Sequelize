import { BadRequestException } from "../common/helpers/exception.helper.js";
import { responseSuccess } from "../common/helpers/function.helper.js";
import { statusCodes } from "../common/helpers/status-code.helper.js";
import { orderService } from "../services/order.service.js";

export const orderController = {
  // [POST] /order
  async create(req, res, next) {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    if (!user_id || !food_id || !amount) {
      throw new BadRequestException("Thiếu user_id, food_id hoặc amount");
    }

    const data = await orderService.createOrder({
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    });

    res
      .status(statusCodes.CREATED)
      .json(responseSuccess(data, "Tạo đơn hàng thành công"));
  },
};