const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');
const { createJwtToken } = require('../helpers/jwt_helper');
const model = require('../../models');
const argon2 = require('argon2');
const User = model.User;

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: { email: email }
    });

    if (!user) throw new Error('No user found');
    // As of now using the unencrypted password but in production code would be saving the password in encrypted manner
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      throw new Error('Invalid Creds');
    }

    const token = createJwtToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });
    user.token = token;
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error && error.message ? error.message : '');
  }
};

module.exports = {
  login
};
