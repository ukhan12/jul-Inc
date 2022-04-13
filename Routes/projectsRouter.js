const router = require('express').Router();
const {fetchProjects, createProject, deleteProject, getProjectById, updateProject, markCompleted} = require('../Controller/projectsController')
const projectsManager = require('../Models/projects');

router.get('/projects', fetchProjects)

router.get('/projects/:id', getProjectById)

router.post('/projects', createProject)

router.patch("/projects/:id", updateProject)

router.put("/projects/:id/complete", markCompleted)

router.delete('projects/id', deleteProject)

module.exports = router;
