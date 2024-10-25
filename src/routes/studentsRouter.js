const express = require("express");

const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");

const router = express.Router();

router.get("/", getStudents);

router.get("/:id", getStudent);

router.post("/", createStudent);

// already have /api/students/:id
router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
