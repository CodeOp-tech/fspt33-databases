const getStudents = (req, res) => {
  return res.send("getStudents");
};

const getStudent = (req, res) => {
  return res.send("getStudent");
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
