import express from "express";
import { orderController } from "../controllers/order.controller.js";

const orderRouter = express.Router();

// Thêm đơn hàng
orderRouter.post("/", orderController.create);

export default orderRouter;