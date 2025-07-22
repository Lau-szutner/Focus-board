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

// get a task by id
export const getTaskById = async (req, res) => {
  console.log(req.params.id);
  try {
    const taskById = await Task.findByPk(req.params.id);

    res.status(200).json(taskById);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error al crear la tarea', details: error.message });
  }
};

export const newTask = async (req, res) => {
  const { title, body } = req.body;

  if (!title && !body) {
    return res.status(400).json({ error: 'Fill it up all' });
  }

  try {
    const newTask = await Task.create({ title, body });
    res.status(200).json(newTask);
    console.log('new task created');
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error al crear la tarea', details: error.message });
  }
};
