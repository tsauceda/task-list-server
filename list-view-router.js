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




//   router.get('/tasks/filter', (req, res) => {
// 	const filtered = req.query.Completed

// 	if (filtered) {
// 		const completedTasks = tasks.filter((item) => item.isCompleted === true);
// 		res.json(completedTasks);
// 	} else {
// 		const completedTasks = tasks.filter((item) => item.isCompleted === false);
// 		res.json(completedTasks);
// 	}
// });





	


  module.exports = router;
  
