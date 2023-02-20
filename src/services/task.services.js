const { Op } = require('sequelize');
const model = require('../../models');
const Task = model.Task;

const getAll = async () => {
  try {
    const allTasks = await Task.findAll();
    return allTasks;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getSingleTaskByProjectId = async (projectId) => {
  try {
    const task = await Task.findAll({
      where: {
        [Op.and]: [
          {
            projectId: projectId
          },
          {
            taskId: taskId
          }
        ]
      }
    });
    return task;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getByProjectId = async (projectId) => {
  try {
    const task = await Task.findAll({
      where: { projectId: projectId }
    });
    return task;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

module.exports = {
  getAll,
  getByProjectId,
  getSingleTaskByProjectId
};
