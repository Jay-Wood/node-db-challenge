const db = require("../data/dbConfig.js");

module.exports = {
    getResources,
    getResourceById,
    addResource
}

function getResources() {
    return db("resources")
        // .select()
}

function getResourceById(id) {
    return db("resources")
        .where("id", id)
        .first()
}

function addResource(newResource) {
    return db("resources")
        .insert(newResource)
        .then(([id]) => this.getResourceById(id))
}