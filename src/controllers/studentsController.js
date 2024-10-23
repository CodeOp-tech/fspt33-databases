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

const createStudent = async (req, res) => {
  try {
    // get payload from request
    const payload = req.body;

    // validate payload
    if (!payload.firstName || !payload.lastName) {
      return res.status(400).json({
        error: "Failed to create student",
      });
    }

    const [result] = await pool.query(
      "INSERT INTO students (??, ??) VALUES (?, ?)",
      ["firstName", "lastName", payload.firstName, payload.lastName]
    );

    return res.status(200).json({
      data: {
        id: result.insertId,
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      error: "Failed to create student",
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    // get id from req
    const { id } = req.params;

    // get payload from request
    const payload = req.body;

    // validate payload
    if (!payload.firstName || !payload.lastName) {
      return res.status(400).json({
        error: "Failed to update student",
      });
    }

    const [result] = await pool.query(
      "UPDATE students SET ?? = ?, ?? = ? WHERE id = ?",
      ["firstName", payload.firstName, "lastName", payload.lastName, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Failed to update student",
      });
    }

    return res.status(200).json({
      data: "Successfully updated student",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      error: "Failed to update student",
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    // get id from req
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM students WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Failed to update student",
      });
    }

    return res.status(200).json({
      data: "Successfully deleted student",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      error: "Failed to delete student",
    });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
