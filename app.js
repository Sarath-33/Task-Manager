import { connectDb } from "./config/db.js"
import express from "express";
import taskRoutes from "./routes/tasksRoutes.js"
import dotenv from "dotenv"

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static("./public"))
app.use(express.json())
app.use("/api/v1/tasks", taskRoutes)


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Port is running at ${PORT}`);

    })
})


