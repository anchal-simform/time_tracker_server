const express = require('express');
const { userAuth, adminAuth } = require('../middlewares/auth');
const router = express.Router();
const timeLogsController = require('../controllers/timeLogs.controllers');

/**
 *  @swagger
 *  /time-logs/projects/{projectId}/time-logs :
 *    get:
 *      tags:
 *        - TimeLogs
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

router.get(
  '/projects/:projectId/time-logs',
  userAuth,
  timeLogsController.getTimeLogsByProjectId
);

/**
 *  @swagger
 *  /time-logs/{taskId}/time-logs :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get single task of a single project by its project id and task id
 *      security:
 *        - bearerAuth: []
 *      parameters:
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

router.get(
  '/tasks/:taskId/time-logs',
  userAuth,
  timeLogsController.getTimeLogsByTaskId
);

/**
 *  @swagger
 *  /time-logs/pending-logs :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get list of pending time logs for admin only
 *      security:
 *        - bearerAuth: []
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

router.get('/pending-logs', adminAuth, timeLogsController.getPendingLogs);

/**
 *  @swagger
 *  /time-logs/updated-logs :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get list of updated time logs for admin only
 *      security:
 *        - bearerAuth: []
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
router.get('/updated-logs', adminAuth, timeLogsController.getUpdatedLogs);

/**
 *  @swagger
 *  /time-logs/by-user :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get all time-logs of a user
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

router.get('/by-user', userAuth, timeLogsController.getTimeLogsByUser);

/**
 *  @swagger
 *  /time-logs/{timeLogId} :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get single time logs details by timelog id
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: timeLogId
 *          in: path
 *          required: true
 *          description: timeLogId
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

router.get('/:timeLogId', userAuth, timeLogsController.getSingleTimeLog);

/**
 *  @swagger
 *  /time-logs/{timeLogId} :
 *    put:
 *      tags:
 *        - TimeLogs
 *      summary: Update time log by its timelogId
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: timeLogId
 *          in: path
 *          required: true
 *          description: timeLogId
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
router.put('/:timeLogId', userAuth, timeLogsController.updateTimeLog);

/**
 *  @swagger
 *  /time-logs :
 *    get:
 *      tags:
 *        - TimeLogs
 *      summary: Get list of time logs between a time range and filtered by view type
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: fromDate
 *          in: query
 *          required: true
 *          description: 2023-01-01
 *          type: string
 *        - name: toDate
 *          in: query
 *          required: true
 *          description: 2023-03-03
 *          type: string
 *        - name: viewType
 *          in: query
 *          required: true
 *          description: monthly, yearly weekly
 *          type: string
 *          enum: [monthly,weekly,yearly]
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

router.get('/', userAuth, timeLogsController.getTimeRangeLogs);

module.exports = router;
