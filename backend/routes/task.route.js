// routes/courses.routes.js
import express from 'express';
// import { authenticateToken } from '../middlewares/authenticateToken.js';

import {
  getAllTasks,
  newTask,
  getTaskById,
} from '../controllers/tasks.controller.js';

const router = express.Router();

// Ruta pública: obtener todas las tareas
router.get('/', getAllTasks);

// Ruta pública: obtener todas las tareas
router.get('/:id', getTaskById);

// Ruta pública: obtener todas las tareas
router.post('/new-task', newTask);

// Ruta pública: obtener
// router.get('/:id', getCourseById);

export default router;
