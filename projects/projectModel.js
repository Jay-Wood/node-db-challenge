const db = require("../data/dbConfig.js");
const mappers = require("../data/mappers.js")


module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    addTask, 
}

function intToBoolean(int) {
    return int === 1 ? true : false;
}

function getProjects(id) {
    let query = db("projects")

    if(id) {
        return query.where("id", id).first()
        .then(project => {
            let result = {
                    ...project, 
                    completed: intToBoolean(project.completed)
                }
                return result;
        })
    } else {
        return query
            .then(projects => {
                return projects.map(project => {
                    let result = {
                        ...project, 
                        completed: intToBoolean(project.completed)
                    }
                    return result;
                })
            })
    }
}

function getTasks(id) {

    return db("projects")
        .join("tasks", "projects.id", "tasks.project_id")
        // .select("projects.project_name", "projects.project_description", "tasks.description", "tasks.completed", "tasks.notes")
        .where("project_id", id)
        .then(tasks => {
            return tasks.map(task => {
                let result = {
                    ...task, 
                    completed: intToBoolean(task.completed)
                }
                return result;
            })
        })
    
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


function getTaskByTaskId(task_id) {
    return db("tasks")
        .where("id", task_id)
}

function addTask(newTask, project_id) {
    return db("tasks")
        .insert(newTask)
        .where("project_id", project_id)
        .then( id => {
            return getTaskByTaskId(id)
        })
}