import express from "express";
import { resController } from "../controllers/res.controller.js";

const resRouter = express.Router();

// ===============================
// 1️⃣ User like / unlike restaurant
// ===============================
resRouter.post("/like", resController.likeRes);
resRouter.delete("/unlike", resController.unlikeRes);

// ===============================
// 2️⃣ Get likes
// ===============================
resRouter.get("/likes/res/:res_id", resController.getLikesByRes);
resRouter.get("/likes/user/:user_id", resController.getLikesByUser);

// ===============================
// 3️⃣ Rate restaurant
// ===============================
resRouter.post("/rate", resController.rateRes);

// ===============================
// 4️⃣ Get rates
// ===============================
resRouter.get("/rates/res/:res_id", resController.getRatesByRes);
resRouter.get("/rates/user/:user_id", resController.getRatesByUser);

export default resRouter;
3