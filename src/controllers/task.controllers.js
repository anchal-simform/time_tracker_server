const taskService = require('../services/task.services');

const getAll = async (req, res) => {
  try {
    const allTasks = await taskService.getAll();
    return res.status(200).json({
      status: 200,
      message: 'Tasks retreived successfully',
      data: allTasks
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in getting all tasks',
      data: []
    });
  }
};

const getByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const task = await taskService.getByProjectId(projectId);
    return res.status(200).json({
      status: 200,
      message: 'Tasks retreived successfully',
      data: task
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in getting all tasks',
      data: []
    });
  }
};

const getSingleTaskByProjectId = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const task = await taskService.getSingleTaskByProjectId(projectId, taskId);
    return res.status(200).json({
      status: 200,
      message: 'Tasks retreived successfully',
      data: task
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in getting all tasks',
      data: []
    });
  }
};

module.exports = {
  getAll,
  getByProjectId,
  getSingleTaskByProjectId
};
