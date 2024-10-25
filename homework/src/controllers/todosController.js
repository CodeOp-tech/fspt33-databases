// import the DB pool from your config folder
const pool = require("../config/db");

// controller to get all todos
const getTodos = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM todos");
  res.status(200).send(result);
};

// controller to get a todo by id
const getTodo = async (req, res) => {
  // grab id from request params
  const { id } = req.params;

  // database query: search for an item by id
  const [result] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);

  // return result
  res.status(200).send(result);
};

// controller to create a todo
const createTodo = async (req, res) => {
  const { title } = req.body;
  if (title) {
    // POST / insert new task
    await pool.query("INSERT INTO todos (title) VALUES (?);", [title]);

    // GET and return new task
    const [result] = await pool.query(
      "SELECT * FROM todos ORDER BY id DESC LIMIT 1;"
    );
    res.status(200).send(result[0]);
  } else {
    res.status(400).send({ error: "You cannot add an empty task" });
  }
};

// controller to update a todo by id
const updateTodo = async (req, res) => {
  // grab id from request params
  const { id } = req.params;

  // grab data from request body
  const { isComplete } = req.body;

  // update database record
  await pool.query("UPDATE todos SET isComplete = ? WHERE id = ?;", [
    isComplete,
    id,
  ]);

  // get and return updated task
  const [result] = await pool.query("SELECT * FROM todos WHERE id = ?;", [id]);
  res.status(200).send(result[0]);
};

// controller to delete a todo by id
const deleteTodo = async (req, res) => {
  // grab id from request params
  const { id } = req.params;

  // delete database record
  await pool.query("DELETE FROM todos WHERE id = ?", [id]);

  res
    .status(200)
    .send({ message: `Successfully deleted to-do with id: ${id}` });
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
