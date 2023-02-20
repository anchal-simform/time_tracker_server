const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controllers');

/**
 *  @swagger
 *  /tasks :
 *    get:
 *      tags:
 *        - Task
 *      summary: Get all task list
 *      security:
 *        - bearerAuth: []
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
router.get('/', taskController.getAll);

/**
 *  @swagger
 *  /tasks/project/{projectId} :
 *    get:
 *      tags:
 *        - Task
 *      summary: Get List of all tasks of a project
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: projectId
 *          in: path
 *          required: true
 *          description: projectId
 *          type: string
 *        - name: taskId
 *          in: path
 *          required: true
 *          description: taskId
 *          type: string
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
router.get('/project/:projectId', taskController.getByProjectId);

module.exports = router;
