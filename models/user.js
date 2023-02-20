'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.TimeLogs, {
        foreignKey: 'userId'
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      token: DataTypes.TEXT,
      role: DataTypes.ENUM('USER', 'ADMIN')
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
