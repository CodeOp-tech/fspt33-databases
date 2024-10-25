const mysql = require("mysql2/promise");

require("dotenv").config();

// update your DB options and use process.env to bring your config values from the .env file
const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbOptions);

module.exports = pool;
