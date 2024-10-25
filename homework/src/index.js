const express = require("express");
const bodyParser = require("body-parser");
// import cors
const cors = require("cors");

// import the todos router
const todosRouter = require("./routes/todosRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use cors
app.use(cors());

// register your /api/todos route and connect to your todos router
app.use("/api/todos", todosRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
