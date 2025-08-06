import express from "express";
import { getAllTasks, createTask, getTask, updateTask, deleteTask} from "../controller/tasksController.js";


const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask)
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


export default router
