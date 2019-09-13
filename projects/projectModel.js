const db = require("../data/dbConfig.js");

module.exports = {
    getProjects,
    getProjectById,
    addProject
}


function getProjects() {
    return db("projects")
        .select(
            "project_name as Project Name",
            "project_description as Project Description",
            "completed as Completed?"
        )
}

function getProjectById(id) {
    return db("projects")
        .where("id", id)
        .first()
}

function addProject(newProj) {
    return db("projects")
        .insert(newProj)
        .then(([id]) => this.getProjectById(id));
}