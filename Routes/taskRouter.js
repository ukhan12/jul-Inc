const router = require('express').Router();;
const {fetchTasks,deleteTasks,getTasksById,updateTask,markCompleted} = require('../Controller/taskController')
const {markCompletedd} = require('../Models/Task')

router.get('/tasks',fetchTasks)

router.get('/tasks/:id',getTasksById)

// router.post('/tasks/project_id', createTask)

router.patch("/tasks/:id", updateTask)

router.put("/tasks/:id/complete", markCompleted)

router.delete('/tasks/:id', deleteTasks)

module.exports = router;