const model = require('../../models');
const Project = model.Project;

const getAll = async () => {
  try {
    const allProject = await Project.findAll();
    return allProject;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

module.exports = {
  getAll
};
