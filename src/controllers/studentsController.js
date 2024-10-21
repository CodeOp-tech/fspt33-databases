const pool = require("../config/db");

const getStudents = async (req, res) => {
  try {
    // use pool to get data from DB
    const [rows] = await pool.query("SELECT * FROM students");

    return res.json({
      data: rows,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      error: "Failed to get all students",
    });
  }
};

const getStudent = async (req, res) => {
  try {
    // get id from req
    const { id } = req.params;

    // use pool to get data from DB
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);

    // check if exits
    if (rows.length === 0) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    return res.json({
      data: rows[0],
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      error: "Failed to get all students",
    });
  }
};

const createStudent = (req, res) => {
  return res.send("createStudent");
};

const updateStudent = (req, res) => {
  return res.send("updateStudent");
};

const deleteStudent = (req, res) => {
  return res.send("deleteStudent");
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
