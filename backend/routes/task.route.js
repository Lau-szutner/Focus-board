// routes/courses.routes.js
import express from 'express';
// import { authenticateToken } from '../middlewares/authenticateToken.js';

import { getAllTasks } from '../controllers/tasks.controller.js';

const router = express.Router();

// Ruta pública: obtener todas las tareas
router.get('/', getAllTasks);

// Ruta pública: obtener
// router.get('/:id', getCourseById);

export default router;
