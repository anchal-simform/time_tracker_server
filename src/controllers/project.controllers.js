const projectService = require('../services/project.services');

const getAll = async (req, res) => {
  try {
    const allProjects = await projectService.getAll();
    return res.status(200).json({
      status: 200,
      message: 'Projected retreived successfully',
      data: allProjects
    });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({
      status: 400,
      message: 'Failure in getting all projects',
      data: []
    });
  }
};

module.exports = {
  getAll
};
