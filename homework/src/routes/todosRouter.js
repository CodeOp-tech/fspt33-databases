const express = require("express");

// import your todos controller functions
const todosController = require("../controllers/todosController");
// optional: import guard
const idExists = require("../guards/idExists");

const router = express.Router();

// add a route to get all todos: GET /
router.get("/", todosController.getTodos);

// add a route to get a todo by id: GET /:id
router.get("/:id", idExists, todosController.getTodo);

// add a route to create a todo: POST /
router.post("/", todosController.createTodo);

// add a route to update a todo by id: PUT /:id
router.put("/:id", idExists, todosController.updateTodo);

// add a route to delete a todo by id: DELETE /:id
router.delete("/:id", idExists, todosController.deleteTodo);

module.exports = router;
