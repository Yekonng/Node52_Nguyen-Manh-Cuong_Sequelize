import { BadRequestException } from "../common/helpers/exception.helper.js";
import { LikeRes, RateRes, User, Restaurant } from "../models/index.js";

export const resService = {
  // =========================
  // 1️⃣ User like nhà hàng
  // =========================
  async likeRes(user_id, res_id) {
    // Kiểm tra xem đã like chưa
    const existed = await LikeRes.findOne({ where: { user_id, res_id } });
    if (existed) {
      throw new BadRequestException("User đã like nhà hàng này rồi!")
      // return { message: "User đã like nhà hàng này rồi!" };
    }

    // Nếu chưa, tạo mới
    await LikeRes.create({
      user_id,
      res_id,
      date_like: new Date(),
    });

    return { message: "Đã like nhà hàng thành công!" };
  },

  // =========================
  // 2️⃣ User bỏ like nhà hàng
  // =========================
  async unlikeRes(user_id, res_id) {
    const existed = await LikeRes.findOne({ where: { user_id, res_id } });
    if (!existed) {
      return { message: "User chưa like nhà hàng này!" };
    }

    await LikeRes.destroy({ where: { user_id, res_id } });
    return { message: "Đã bỏ like nhà hàng thành công!" };
  },

  // =========================
  // 3️⃣ Lấy danh sách like theo nhà hàng
  // =========================
  async getLikesByRes(res_id) {
    const data = await LikeRes.findAll({
      where: { res_id },
      include: [{ model: User, attributes: ["user_id", "full_name", "email"] }],
    });
    return data;
  },

  // =========================
  // 4️⃣ Lấy danh sách like theo user
  // =========================
  async getLikesByUser(user_id) {
    const data = await LikeRes.findAll({
      where: { user_id },
      include: [
        { model: Restaurant, attributes: ["res_id", "res_name", "image"] },
      ],
    });
    return data;
  },

  // =========================
  // 5️⃣ User đánh giá nhà hàng
  // =========================
  async rateRes(user_id, res_id, amount) {
    // Kiểm tra nếu user đã rate thì cập nhật
    const existed = await RateRes.findOne({ where: { user_id, res_id } });

    if (existed) {
      existed.amount = amount;
      existed.date_rate = new Date();
      await existed.save();
      return { message: "Đã cập nhật đánh giá thành công!" };
    }

    // Nếu chưa rate thì tạo mới
    await RateRes.create({
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    });

    return { message: "Đã thêm đánh giá nhà hàng thành công!" };
  },

  // =========================
  // 6️⃣ Danh sách rate theo nhà hàng
  // =========================
  async getRatesByRes(res_id) {
    const data = await RateRes.findAll({
      where: { res_id },
      include: [{ model: User, attributes: ["user_id", "full_name"] }],
    });
    return data;
  },

  // =========================
  // 7️⃣ Danh sách rate theo user
  // =========================
  async getRatesByUser(user_id) {
    const data = await RateRes.findAll({
      where: { user_id },
      include: [
        { model: Restaurant, attributes: ["res_id", "res_name", "image"] },
      ],
    });
    return data;
  },
};
