const timeLogService = require('../services/timeLogs.services');

const createNewEntry = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const timeLog = await timeLogService.createNewEntry(projectId, taskId, {
      ...req.body,
      userId: req.user.id
    });
    return res.status(200).json({
      status: 200,
      message: 'Time log created successfully',
      data: timeLog
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in creating Time log',
      data: []
    });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const timeLog = await timeLogService.updateEntry(projectId, taskId, {
      ...req.body,
      userId: req.user.id
    });
    return res.status(200).json({
      status: 200,
      message: 'Time log created successfully',
      data: timeLog
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in creating Time log',
      data: []
    });
  }
};

const getTimeLogsByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { timeLogs, totalDuration } =
      await timeLogService.getTimeLogsByProjectId(projectId, req.user.id);
    return res.status(200).json({
      status: 200,
      message: 'Time logs Fetched successfully',
      data: timeLogs,
      totalDuration: totalDuration
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in fetching Time log',
      data: []
    });
  }
};

const getTimeLogsByUser = async (req, res) => {
  try {
    const { timeLogs, totalDuration } = await timeLogService.getTimeLogsByUser(
      req.user.id
    );
    return res.status(200).json({
      status: 200,
      message: 'Time logs Fetched successfully',
      data: timeLogs,
      totalDuration: totalDuration
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in fetching Time log',
      data: []
    });
  }
};

const getSingleTimeLog = async (req, res) => {
  try {
    const { timeLogId } = req.params;
    const timeLog = await timeLogService.getSingleTimeLog(
      timeLogId,
      req.user.id
    );
    return res.status(200).json({
      status: 200,
      message: 'Time logs Fetched successfully',
      data: timeLog
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in fetching Time log',
      data: []
    });
  }
};

const getTimeLogsByTaskId = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { timeLogs, totalDuration } =
      await timeLogService.getTimeLogsByTaskId(taskId, req.user.id);
    return res.status(200).json({
      status: 200,
      message: 'Time logs Fetched successfully',
      data: timeLogs,
      totalDuration
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in getting Time logs',
      data: []
    });
  }
};

const getPendingLogs = async (req, res) => {
  try {
    const timeLogs = await timeLogService.getLogsByStatus(['PENDING']);
    return res.status(200).json({
      status: 200,
      message: 'Time log Fetched successfully',
      data: timeLogs
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in Fetching log',
      data: []
    });
  }
};

const getUpdatedLogs = async (req, res) => {
  try {
    const timeLogs = await timeLogService.getLogsByStatus([
      'ACCEPTED',
      'REJECTED'
    ]);
    return res.status(200).json({
      status: 200,
      message: 'Time log Fetched successfully',
      data: timeLogs
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in Fetching Time logs',
      data: []
    });
  }
};

const updateTimeLog = async (req, res) => {
  try {
    const { timeLogId } = req.params;
    const { status } = req.body;
    const timeLogs = await timeLogService.updateTimeLog(timeLogId, status);
    return res.status(200).json({
      status: 200,
      message: 'Time log Updated successfully',
      data: timeLogs
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in Updating Time logs',
      data: []
    });
  }
};

const getTimeRangeLogs = async (req, res) => {
  try {
    const { fromDate, toDate, viewType } = req.query;
    const data = await timeLogService.getTimeRangeLogs(
      fromDate,
      toDate,
      viewType,
      req.user.id
    );
    return res.status(200).json({
      data,
      status: 200,
      message: 'Time log Updated successfully'
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in Updating Time logs',
      data: []
    });
  }
};

module.exports = {
  createNewEntry,
  getTimeLogsByProjectId,
  getTimeLogsByTaskId,
  getPendingLogs,
  getUpdatedLogs,
  updateTimeLog,
  getTimeRangeLogs,
  getTimeLogsByUser,
  getSingleTimeLog,
  updateEntry
};
