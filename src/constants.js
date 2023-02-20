require('dotenv').config();

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const DB_HOST = process.env.DB_HOST;
const PORT = 4090;

module.exports = {
  DB_PASSWORD,
  DB_NAME,
  DB_USERNAME,
  PORT,
  JWT_SECRET,
  DB_HOST
};
