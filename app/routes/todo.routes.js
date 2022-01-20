module.exports = app => {
    const todo = require("../controllers/todo.controller.js");
    const room = require("../controllers/room.controller.js");

    var router = require("express").Router();

    // Create a new Room
    router.post("/room", room.create);

    // Retrieve all Room
    router.get("/room", room.findAll);

    // Retrieve all published Todo
    router.get("/published", todo.findAllPublished);

    // Retrieve a single Todo with id
    router.get("/:id", todo.findOne);

    // Update a Todo with id
    router.put("/:id", todo.update);

    // Delete a Todo with id
    router.delete("/:id", todo.delete);

    // Delete all Todo
    router.delete("/", todo.deleteAll);

    app.use("/api", router);
};