import mongoose from "mongoose";

//this is schema
const taskSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

//this is model

const Task = mongoose.model("Task", taskSchema);

export default Task;
