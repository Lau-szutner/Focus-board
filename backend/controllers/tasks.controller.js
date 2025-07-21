import Task from '../models/Task.js';

//obtener todas las tareas
export const getAllTasks = async (req, res) => {
  try {
    const courses = await Task.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(
      {
        message: 'error al obtenes los cursos',
      },
      error
    );
  }
};

// crear una tarea
export const newTask = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Fill it up all' });
  }

  try {
    const newTask = await Task.create({ title });

    res.status(200).json(newTask);

    console.log('new task created');
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error al crear la tarea', details: error.message });
  }
};
