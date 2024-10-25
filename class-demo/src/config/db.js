const mysql = require("mysql2/promise");

const dbOptions = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "students_db",
};

const pool = mysql.createPool(dbOptions);

module.exports = pool;
