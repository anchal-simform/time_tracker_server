const { Op } = require('sequelize');
const model = require('../../models');
const TimeLogs = model.TimeLogs;
const Task = model.Task;
const User = model.User;
const Project = model.Project;
const sequelize = model.sequelize;
const { fn, col } = sequelize;

// Joins logic for the time logs to get project , task and user details

const timeLogJoins = [
  {
    model: Task,
    attributes: ['name', 'id', 'projectId', 'description']
  },
  {
    model: User,
    attributes: ['email', 'id']
  },
  {
    model: Project,
    attributes: ['name', 'id', 'description']
  }
];

let viewTypeParams = {
  monthly: { type: 'month', format: 'Mon-YYYY' },
  weekly: { type: 'week', format: 'YYYY-MM-DD' },
  yearly: { type: 'year', format: 'YYYY' }
};

/**
 *
 * @param {*} viewType
 * @returns
 */
const getAttributeParams = (viewType) => {
  return viewTypeParams[viewType];
};

/**
 *
 * @param {*} type
 * @param {*} format
 * @returns  the attributes for getting weekly, monthly and yearly stats
 */

const getTimeRangeAttributes = ({ type, format }) => {
  return [
    [
      sequelize.fn('to_char', fn('date_trunc', type, col('date')), format),
      'field'
    ],
    [fn('sum', col('duration')), 'totalDuration']
  ];
};

const createNewEntry = async (projectId, taskId, payload) => {
  try {
    const saveObject = {
      projectId,
      taskId,
      date: new Date(payload.date),
      duration: payload.duration ?? '',
      userId: payload.userId,
      updatedAt: new Date(),
      comment: payload.comment ?? '',
      status: 'PENDING'
    };
    const timeLog = await TimeLogs.create(saveObject);
    return timeLog;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const updateEntry = async (projectId, taskId, payload) => {
  try {
    const updateObject = {
      projectId,
      taskId,
      date: new Date(payload.date),
      duration: payload.duration ?? '',
      userId: payload.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      comment: payload.comment ?? '',
      status: 'PENDING'
    };
    const timeLog = await TimeLogs.update(updateObject, {
      where: { id: payload.timeLogId }
    });
    return timeLog;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getSingleTimeLog = async (timeLogId, userId) => {
  try {
    const timeLog = await TimeLogs.findOne({
      where: { id: timeLogId, userId: userId },
      include: timeLogJoins
    });
    return timeLog;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getTimeLogsByProjectId = async (projectId, userId) => {
  try {
    const timeLogs = await TimeLogs.findAll({
      where: {
        [Op.and]: [{ projectId: projectId }, { userId: userId }]
      },
      include: timeLogJoins
    });
    const [totalDuration] = await TimeLogs.findAll({
      attributes: [[fn('SUM', col('duration')), 'totalDuration']],
      where: {
        [Op.and]: [{ projectId: projectId }, { userId: userId }]
      },
      raw: true
    });

    return { timeLogs, totalDuration: totalDuration?.totalDuration };
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getTimeLogsByUser = async (userId) => {
  try {
    const timeLogs = await TimeLogs.findAll({
      where: { userId: userId },
      include: timeLogJoins
    });

    const [totalDuration] = await TimeLogs.findAll({
      attributes: [[fn('SUM', col('duration')), 'totalDuration']],
      where: { userId: userId },
      raw: true
    });

    return { timeLogs, totalDuration: totalDuration?.totalDuration };
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getTimeLogsByTaskId = async (taskId, userId) => {
  try {
    const timeLogs = await TimeLogs.findAll({
      where: {
        [Op.and]: [{ taskId: taskId }, { userId: userId }]
      },
      include: timeLogJoins
    });
    const [totalDuration] = await TimeLogs.findAll({
      attributes: [[fn('SUM', col('duration')), 'totalDuration']],
      where: {
        [Op.and]: [{ taskId: taskId }, { userId: userId }]
      },
      raw: true
    });

    return { timeLogs, totalDuration: totalDuration?.totalDuration };
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getLogsByStatus = async (status) => {
  try {
    const timeLogs = await TimeLogs.findAll({
      where: { status: status },
      include: timeLogJoins
    });
    const [totalDuration] = await TimeLogs.findAll({
      attributes: [[fn('SUM', col('duration')), 'totalDuration']],
      where: { status: status },
      raw: true
    });

    return { timeLogs, totalDuration: totalDuration?.totalDuration };
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const updateTimeLog = async (timeLogId, status) => {
  try {
    const timeLog = await TimeLogs.update(
      { status: status, updatedAt: new Date() },
      {
        where: { id: timeLogId }
      }
    );
    return timeLog;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

const getTimeRangeLogs = async (fromDate, toDate, viewType, userId) => {
  try {
    const timeRangeWhereCondition = {
      [Op.and]: [
        {
          date: {
            [Op.between]: [fromDate, toDate]
          }
        },
        { userId: userId }
      ]
    };

    let attributeParams = getAttributeParams(viewType);

    const timeLog = await TimeLogs.findAll({
      where: timeRangeWhereCondition,
      attributes: getTimeRangeAttributes(attributeParams),
      group: 'field'
    });

    const timeLogs = await TimeLogs.findAll({
      where: {
        [Op.and]: [
          {
            date: {
              [Op.between]: [new Date(fromDate), new Date(toDate)]
            }
          },
          { userId: userId }
        ]
      },
      include: timeLogJoins
    });
    return { stats: timeLog, timeLogs };
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

module.exports = {
  createNewEntry,
  getTimeLogsByProjectId,
  getTimeLogsByTaskId,
  getLogsByStatus,
  updateTimeLog,
  getTimeRangeLogs,
  getTimeLogsByUser,
  getSingleTimeLog,
  updateEntry
};
