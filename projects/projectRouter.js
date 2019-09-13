const express = require("express");

const projects = require("./projectModel.js");
const router = express.Router();

router.get("/", (req, res) => {
    projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log("There was an error getting projects: ", err)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    
    projects.getProjects(id)
        .then(project => {
            if(project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({message: "There is no project with that id, pal."})
            }
        })
        .catch(err => {
            console.log("There was an error getting that project: ", err)
        })
})

router.post("/", (req, res) => {
    const newProj = req.body;

    projects.addProject(newProj)
        .then( (project) => {
            res.status(200).json(project)
        })
        .catch( () => {
            res.status(500).json({error: "There was an error posting this project to the database."})
        })
})

router.get("/:id/tasks", (req, res) => {
    const id = req.params.id;
    projects.getTasks(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve tasks from server"})
    })
})

router.post("/:id/tasks", (req, res) => {
    const id = req.params.id;
    const newTask = req.body;

    projects.getProjectById(id)
    .then(project => {
        if(project) {
            projects.addTask(newTask, id)
            .then(updatedTask => {
                res.json(updatedTask)
            }) 
        } else {
            res.status(404).json({message: "Could not find a project with that ID."})
        }
    }) 
    .catch (err => {
        res.status(500).json({ message: 'Failed to update project tasks' });
      });
    
})


module.exports = router;