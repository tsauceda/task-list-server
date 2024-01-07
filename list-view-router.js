const { Router } = require('express');

const router = Router();

const tasks = [
	{
            id: 123456,
            isCompleted: true,
            description: 'walk the dog',
        },
        {
            id: 354675,
            isCompleted: false,
            descripcion: 'Buy a car',
        },
        {
            id: 498765,
            isCompleted: false,
            description: 'Read a charper of books',
        },
        {
            id:678954,
            isCompleted: true,
            description: 'go to the gym',
        },
    ];


router.get('/', (req, res) => {
	res.status(200).send('Lista de tareas');
});


router.get('/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    

    if (taskId) {
    return res.status(201).send('task ${task.id} y description ${descrip}');
    }
    return res.status(400).send('Tarea no encontrada')

});


router.get('/', (req, res) => {
    const completas = req.query.completas;

    if (completas !== undefined) {
        const esCompleta = completas.toLowerCase() === 'true';
        const tareasFiltradas = tasks.filter(tarea => tarea.completa === esCompleta);
        res.json(tareasFiltradas);
    } else {
        // Si no se proporciona el parámetro completas, devolver todas las tareas
        res.json(tasks);
    }
});


	


  module.exports = router;
  
