'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TimeLogs.belongsTo(models.Task, {
        foreignKey: 'taskId'
      });
      TimeLogs.belongsTo(models.Project, {
        foreignKey: 'projectId'
      });
      TimeLogs.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  TimeLogs.init(
    {
      taskId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      duration: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      status: DataTypes.ENUM('PENDING', 'ACCEPTED', 'REJECTED')
    },
    {
      sequelize,
      modelName: 'TimeLogs'
    }
  );
  return TimeLogs;
};
