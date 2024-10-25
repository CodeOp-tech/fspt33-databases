const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const studentsRouter = require("./routes/studentsRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// register our studentRouter
app.use("/api/students", studentsRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
