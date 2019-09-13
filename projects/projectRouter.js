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


module.exports = router;