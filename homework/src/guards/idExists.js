// import the DB pool from your config folder
const pool = require("../config/db");

const idExists = async (req, res, next) => {
  // grab id from request params
  const { id } = req.params;

  try {
    // database query: search for an item by id
    const [result] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);

    // if there is data
    if (result.length) {
      // continue to next operation
      next();
    } else {
      // OR throw an error if no task with that id
      return res.status(404).send({ error: `No task with id ${id}` });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Database query failed in idExists guard" });
  }
};

module.exports = idExists;
