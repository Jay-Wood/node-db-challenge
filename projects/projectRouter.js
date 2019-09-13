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
    
    projects.getProjectById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log("There was an error getting that project: ", err)
        })

})

module.exports = router;