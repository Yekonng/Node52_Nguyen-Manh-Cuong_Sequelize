import express from "express";
import demoController from "../controllers/demo.controller.js";

const demoRouter = express.Router();

demoRouter.get("/check-server", demoController.checkServer)


export default demoRouter;