const projectsManager = require('../Models/projects');

async function fetchProjects(req, res){
    try{
        const data = await projectsManager.getAllProjects()
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

async function createProject(req, res){
    const {project} = req.body

    if(!project){
        return res.status(400).json({
            message: "Enter body data please"
        })
    }
    try{
        const taskItem = await projectsManager.newProject(project)
        res.status(201).json({
            data: projectItem
        });

    }catch (err){
        res.status(400).json({
            message: err.message
        });
    }
}

async function deleteProject(req, res){
    const projectId = req.params.id;

    const data = await projectsManager.getAllProjects(projectId);

    if(!data){
        res.status(400).json({
            message: 'Could not find project with the id ${projectId}'
        })
    }
    try{
        await projectsManager.remove(projectId);
        return res.sendStatus(204)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}

async function getProjectById(req, res){
    const projectId = req.params.id

    if(!projectId){
        res.status(400).json({
            message:"No"
        })
    }
    try{
        const data = await projectsManager.getOneProject(projectId);
        res.status(200).json({
            data
        })  
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
} 

async function updateProject(req, res){
    const projectId = req.params.id
    const {project} = req.body

    if(!projectId){
        res.status(404).json({
            message: 'No project matches id of ${projectId}'
        });
    }
    try{
        const data = await projectsManager.updateProject(projectId, project)
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(404).json({
            message:err.message
        })
    }
}

async function markCompleted(req, res){
    const projectId = req.params.id
    const {completed} = req.body

    const results = await projectsManager.getOneProject(projectId)

    if(!result){
        res.status(404).json({
            message: "No project you can mark completed"
        })
    }
    try{
        const project = await projectsManager.markComplete(projectId, completed)
        res.status(204).json({
            data:task
        })
        }catch(err){
            res.status(404).json({
                message: err.message
            })
        }
}

module.exports = {
    fetchProjects,
    createProject,
    deleteProject,
    getProjectById,
    updateProject,
    markCompleted
};