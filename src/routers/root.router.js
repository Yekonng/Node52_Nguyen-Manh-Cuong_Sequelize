import express from "express"
import demoRouter from "./demo.router.js"
import resRouter from "./res.router.js"
import orderRouter from "./order.router.js"

const rootRouter = express.Router()

// Check
rootRouter.use("/demo", demoRouter)

//
rootRouter.use("/res", resRouter)

// 
rootRouter.use("/order", orderRouter)



export default rootRouter