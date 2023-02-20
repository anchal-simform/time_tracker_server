const authService = require('../services/auth.services');

const login = async (req, res) => {
  try {
    // Can validate req body first before passing
    const user = await authService.login(req.body);
    return res.status(200).json({
      status: 200,
      message: 'User Logged in successfully',
      data: { token: user.token, email: user.email, role: user.role }
    });
  } catch (error) {
    console.log({ error });
    return res.status(401).json({
      status: 400,
      message: error.message ? error.message : 'Failure in Login',
      data: []
    });
  }
};

module.exports = {
  login
};
