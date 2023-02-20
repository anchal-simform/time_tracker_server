const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controllers');
const taskController = require('../controllers/task.controllers');
const timeLogsController = require('../controllers/timeLogs.controllers');
const { userAuth } = require('../middlewares/auth');

/**
 *  @swagger
 *  /projects :
 *    get:
 *      tags:
 *        - Project
 *      summary: Get List of All projects
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

router.get('/', projectController.getAll);

/**
 *  @swagger
 *  /projects/{projectId}/tasks :
 *    get:
 *      tags:
 *        - Project
 *      summary: Get tasks of a single project by its project id
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: projectId
 *          in: path
 *          required: true
 *          description: projectId
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
router.get('/:projectId/tasks', taskController.getByProjectId);

/**
 *  @swagger
 *  /projects/{projectId}/task/{taskId} :
 *    get:
 *      tags:
 *        - Project
 *      summary: Get single task of a single project by its project id and task id
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
router.get('/:projectId/task/:taskId', taskController.getSingleTaskByProjectId);

/**
 *  @swagger
 *  /projects/{projectId}/task/{taskId}/time-logs :
 *    post:
 *      tags:
 *        - Project
 *      summary: Create new time logs of a single task of a single project by its project id and task id
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
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                date:
 *                  type: string
 *                  example: 2023-02-16
 *                duration:
 *                  type: number
 *                  example: 40
 *                comment:
 *                  type: string
 *                  example: test comment
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

router.post(
  '/:projectId/task/:taskId/time-logs',
  userAuth,
  timeLogsController.createNewEntry
);

/**
 *  @swagger
 *  /projects/{projectId}/task/{taskId}/time-logs :
 *    put:
 *      tags:
 *        - Project
 *      summary: Update time log by its timelogId
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
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                date:
 *                  type: string
 *                  example: 2023-02-16
 *                duration:
 *                  type: number
 *                  example: 40
 *                timeLogId:
 *                  type: number
 *                  example: 1
 *                comment:
 *                  type: string
 *                  example: test comment
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

router.put(
  '/:projectId/task/:taskId/time-logs',
  userAuth,
  timeLogsController.updateEntry
);

module.exports = router;
