const express = require("express");
const projectRouter = require("./projects/projectRouter.js");
const resourcesRouter = require("./resources/resourcesRouter.js");;
const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);

server.get("/", (req, res) => {
    res.send("We here, big dawg.")
})

module.exports = server;