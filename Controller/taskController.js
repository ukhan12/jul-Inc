const { resolveSoa } = require('dns');
const { rmSync } = require('fs');
const TasksManager = require('../Models/Task')

async function fetchTasks(req, res){
    try{
        const data = await TasksManager.findAll()
        res.json({
            data
        })
   } catch (err){
       res.statusCode = 200;
       res.json({
           message:err.message,
       });
   }
}

async function createTask(req,res){
    // validate the data 
    const {task} = req.body
    // console.log(task)
    if(!task){
        return res.status(400).json({
            message : "Enter body data please"
        })
    }
    try{
        const taskItem = await TasksManager.create(task)
        console.log(taskItem)
        res.status(201).json({
            data : taskItem
            
        });

    }catch (err){
        res.status(400).json({
            message:err.message
        });
    }
}

async function deleteTasks(req,res){
    const taskId = req.params.id;

    const data = await TasksManager.findAll(taskId)

    if(!data){
        res.status(400).json({
            message: `Could not find Task with the id ${taskId}`
        })
    }
    try{
        await TasksManager.remove(taskId);
        return res.sendStatus(204)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}

async function getTasksById(req,res){
    const taskId = req.params.id
    
    if(!taskId){
        res.status(400).json({
            message:"No "
        })
}
try{
    const data = await TasksManager.getSpecificTask(taskId)
    res.status(200).json({
        data
    })
}catch (err){
    res.status(400).json({
        message:err.message
    })
    }
}

async function updateTask(req,res){
    const taskId = req.params.id
    const {task} = req.body 
    
    if(!taskId){
        res.status(404).json({
            messgae:`No task matches id of ${taskId}`
        })
    }
    try{
        const data = await TasksManager.updateTask(taskId,task)
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(404).json({
            message:err.message
        })
    }
}

async function markCompleted(req,res){
    const taskId = req.params.id 
    const {completed} = req.body
  
    const result = await TasksManager.getSpecificTask(taskId)
    
    if(!result){
      res.status(404).json({
        message: "No task you can mark completed gang"
      })
    }
    try{
      const task = await TasksManager.markCompletedd(taskId,completed)
      res.status(204).json({
        data: task
      })
    }catch (err){
      res.status(404).json({
        message: err.message
      })
    }
  }

  module.exports = {
      fetchTasks,
      createTask,
      deleteTasks,
      getTasksById,
      updateTask,
      markCompleted
};
