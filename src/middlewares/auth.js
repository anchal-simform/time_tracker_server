const models = require('../../models');
const Users = models.User;
const jwt = require('jsonwebtoken');
const { verifyJwtToken } = require('../helpers/jwt_helper');
const { Op } = require('sequelize');

const userAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    let decode = null;
    try {
      decode = verifyJwtToken(token);
    } catch (err) {
      throw new Error('Authentication Failure');
    }

    if (!decode || !decode.userId) {
      throw new Error('Authentication Failure');
    }

    const user = await Users.findOne({
      where: { id: decode.userId }
    });
    if (!user) {
      throw new Error('No user found');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log({ error });
    return res.status(401).send({
      message: 'Authentication Failure',
      error: error.message,
      isError: true
    });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    let decode = null;
    try {
      decode = verifyJwtToken(token);
    } catch (err) {
      throw new Error('Authentication Failure');
    }

    if (!decode || !decode.userId) {
      throw new Error('Authentication Failure');
    }

    const user = await Users.findOne({
      where: {
        [Op.and]: [
          { id: decode.userId },
          {
            role: decode.role
          }
        ]
      }
    });

    if (!user) {
      throw new Error('No user found');
    }

    if (user.role !== 'ADMIN') {
      throw new Error('Not authorised User');
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log({ error });
    return res.status(401).send({
      message: 'Authentication Failure',
      error: error.message,
      isError: true
    });
  }
};

module.exports = { userAuth, adminAuth };
