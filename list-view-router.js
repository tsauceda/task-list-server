const { Router } = require("express");
const router = Router();

const tasks = [
	{
		id: 1, 
		isCompleted: true, 
		description: "Ir al gimnacio"
	},
	{
		id: 2, 
		Completed: true, 
		description: "Hacer cambio de aceite al carro"
	},
	{
		id: 3, 
		Completed: false, 
		description: "Comprar comida al gato"
	},
	{
		id: 4, 
		Completed: true, 
		description: "Llevar a Edrick al dentista"
	},
	{
		id: 5, 
		Completed: false, 
		description: "Lavar la ropa"
	}
	];

router.get('/', (req, res) => {
    res.json(tasks)
});



router.get('/:taskId', (req, res) => {
	const taskId = parseInt(req.params.taskId);
	const task = tasks.find(t => t.id === taskId);
  
	if (task) {
	  res.json(task);
	} else {
	  res.status(404).json({ error: 'Tarea no encontrada' });
	}
  });


  router.get('/tasks/completed', (req, res) => {
	const completedTasks = tasks.filter(task => task.completed);
	res.json(completedTasks);
  });
  
  // Ruta para obtener tareas incompletas
  router.get('/tasks/incomplete', (req, res) => {
	const incompleteTasks = tasks.filter(task => !task.completed);
	res.json(incompleteTasks);
  });


// Crear una nueva tarea
app.post('/tasks', (req, res) => {
    const { description, isCompleted } = req.body;
    if (!description) {
        return res.status(400).json({ error: 'Description is required' });
    }
    const newTask = {
        id: tasks.length + 1,
        isCompleted: !!isCompleted, // Convertir a booleano
        description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Actualizar una tarea
app.put('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const { description, isCompleted } = req.body;
    if (description) {
        task.description = description;
    }
    if (isCompleted !== undefined) {
        task.isCompleted = !!isCompleted; // Convertir a booleano
    }
    res.json(task);
});

// Eliminar una tarea
app.delete('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ success: true });
});

// Obtener tareas completas o incompletas
app.get('/tasks/:status(completed|incomplete)', (req, res) => {
    const status = req.params.status === 'completed';
    const filteredTasks = tasks.filter(task => task.isCompleted === status);
    res.json(filteredTasks);
});


// Crear una nueva tarea
router.post('/tasks', (req, res) => {
    const { description, isCompleted } = req.body;
    if (!description) {
        return res.status(400).json({ error: 'Description is required' });
    }
    const newTask = {
        id: tasks.length + 1,
        isCompleted: !!isCompleted, // Convertir a booleano
        description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Actualizar una tarea
router.put('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const { description, isCompleted } = req.body;
    if (description) {
        task.description = description;
    }
    if (isCompleted !== undefined) {
        task.isCompleted = !!isCompleted; // Convertir a booleano
    }
    res.json(task);
});

// Eliminar una tarea
router.delete('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ success: true });
});

// Obtener tareas completas o incompletas
router.get('/tasks/:status(completed|incomplete)', (req, res) => {
    const status = req.params.status === 'completed';
    const filteredTasks = tasks.filter(task => task.isCompleted === status);
    res.json(filteredTasks);
});
	


  module.exports = router;
  
