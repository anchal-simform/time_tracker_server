const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

const createJwtToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

const verifyJwtToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  createJwtToken,
  verifyJwtToken
};
