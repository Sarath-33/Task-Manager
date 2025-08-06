import Task from "../models/taskModels.js";

//Get all the Task..
export async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find({});
        res.status(201).json({ tasks })
    } catch (err) {
        res.status(500).json({ message: "An Error Occurd" })
    }
}

//Create a single task....
export async function createTask(req, res) {
    try {
        const task = Task.create(req.body)
        res.status(201).json({ task, message: "Task Created succussfully!!!yay!!" })
    } catch (err) {
        res.status(501).json({ message: "A error happend..." })
        console.log(err);
    }
}


//get a single task..
export async function getTask(req, res) {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) return res.status(404).json({ message: "Task Not Found!!" })
        res.send({ task })
    } catch (err) {
        res.status(500).json({ message: "A error Happend in the getTaskId!!" })
    }
}


//update the current task...
export async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) return res.status(404).json({ message: "Task Not Found!!" })
        res.send({ task, message: "Updated Successfully!!" })
    } catch (err) {
        res.status(500).json({ message: "A error Happend in the updateTask!!" })
    }
}



//Delete the task...
export async function deleteTask(req, res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({ message: "Task Not Found!!" })
        res.send({ task, message: "Deleted Successfully!!" })
    } catch (error) {
        res.status(500).json({ message: "A error Happend in the getTaskId!!" })
    }

}

