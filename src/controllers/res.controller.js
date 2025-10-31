import { resService } from "../services/res.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { statusCodes } from "../common/helpers/status-code.helper.js";

export const resController = {
  // ===============================
  // 1️⃣ User like / unlike restaurant
  // ===============================
  async likeRes(req, res, next) {
    const { user_id, res_id } = req.body;
    if (!user_id || !res_id)
      throw new BadRequestException("Thiếu user_id hoặc res_id");

    const result = await resService.likeRes(user_id, res_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(result, "Like nhà hàng thành công"));
  },

  async unlikeRes(req, res, next) {
    const { user_id, res_id } = req.body;
    if (!user_id || !res_id)
      throw new BadRequestException("Thiếu user_id hoặc res_id");

    const result = await resService.unlikeRes(user_id, res_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(result, "Bỏ like nhà hàng thành công"));
  },

  // ===============================
  // 2️⃣ Get likes
  // ===============================
  async getLikesByRes(req, res, next) {
    const { res_id } = req.params;
    if (!res_id) throw new BadRequestException("Thiếu res_id");

    const data = await resService.getLikesByRes(res_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(data, "Lấy danh sách like theo nhà hàng"));
  },

  async getLikesByUser(req, res, next) {
    const { user_id } = req.params;
    if (!user_id) throw new BadRequestException("Thiếu user_id");

    const data = await resService.getLikesByUser(user_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(data, "Lấy danh sách like theo user"));
  },

  // ===============================
  // 3️⃣ Rate restaurant
  // ===============================
  async rateRes(req, res, next) {
    const { user_id, res_id, amount } = req.body;
    if (!user_id || !res_id || amount === undefined)
      throw new BadRequestException("Thiếu user_id, res_id hoặc amount");

    const result = await resService.rateRes(user_id, res_id, amount);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(result, "Đánh giá nhà hàng thành công"));
  },

  // ===============================
  // 4️⃣ Get rates
  // ===============================
  async getRatesByRes(req, res, next) {
    const { res_id } = req.params;
    if (!res_id) throw new BadRequestException("Thiếu res_id");

    const data = await resService.getRatesByRes(res_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(data, "Lấy danh sách đánh giá theo nhà hàng"));
  },

  async getRatesByUser(req, res, next) {
    const { user_id } = req.params;
    if (!user_id) throw new BadRequestException("Thiếu user_id");

    const data = await resService.getRatesByUser(user_id);
    res
      .status(statusCodes.OK)
      .json(responseSuccess(data, "Lấy danh sách đánh giá theo user"));
  },
};
