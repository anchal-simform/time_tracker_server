require('dotenv').config();

const DB_NAME = 'time_tracker';
const DB_USERNAME = 'postgres';
const DB_PASSWORD = 'postgres';
const JWT_SECRET = 'test123';
const PORT = 4090;

module.exports = {
  DB_PASSWORD,
  DB_NAME,
  DB_USERNAME,
  PORT,
  JWT_SECRET
};
