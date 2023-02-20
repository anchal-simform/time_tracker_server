const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');

/**
 *  @swagger
 *  /auth/login:
 *    post:
 *      tags:
 *        - User Auth
 *      summary: User auth login
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: test
 *                password:
 *                  type: string
 *                  example: test
 *      responses:
 *        '200':
 *          description: OK
 *        '400':
 *          description: Bad Request
 *        '401':
 *          description: Authorization Failure
 *        '500':
 *          description: Internal Server Error
 */
router.post('/login', authController.login);

module.exports = router;
