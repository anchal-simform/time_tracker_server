const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = require('../constants');

/**
 * @description - Create the sequelize instance by  Passing parameters separately (other dialects)
 */

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

/**
 * @description - This function is used to create and start the database connection
 */
async function startConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  startConnection,
  sequelize
};
