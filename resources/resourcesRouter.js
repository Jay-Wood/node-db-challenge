const express = require("express");
const resources = require("./resourcesModel.js");
const router = express.Router();

router.get("/", (req, res) => {
    resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log("There was an error getting resources: ", err)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    
    resources.getResourceById(id)
    .then(resource => {
        if(resource) {
            res.status(200).json(resource)
        } else {
            res.status(404).json({message: "There is no resource with that id, pal."})
        }
    })
    .catch(err => {
        console.log("There was an error getting that resource: ", err)
    })
})

router.post("/", (req, res) => {
    const newResource = req.body;

    resources.addResource(newResource)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch( () => {
        res.status(500).json({error: "There was an error posting this resource to the database."})
    })

})



module.exports = router;