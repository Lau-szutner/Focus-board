import express from 'express';
import dotenv from 'dotenv';
import './config/database.js'; // Esto ejecuta el archivo y llama a verifyConnection() y syncDatabase()
import tasksRoutes from './routes/task.route.js';
dotenv.config();

const app = express();
const port = 3000;
app.use(express.json()); // <-- Agrega esta línea
app.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/tasks', tasksRoutes); // Rutas para los usuarios
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
