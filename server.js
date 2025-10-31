import express from "express";
import rootRouter from "./src/routers/root.router.js";
import { appError } from "./src/common/app-error/app.error.js";

const app = express()

app.use(express.json())

// Check
app.use("/api", rootRouter)


app.use(appError)

const PORT = 3069
app.listen(PORT, () => {
    console.log("Server online")
})

