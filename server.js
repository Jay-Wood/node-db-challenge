const express = require("express");
const projectRouter = require("./projects/projectRouter.js");
const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
    res.send("We here, big dawg.")
})

module.exports = server;