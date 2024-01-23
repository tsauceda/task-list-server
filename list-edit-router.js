const express = require('express')

const router = express.Router();



// Middleware para manejar errores
const handleErrors = (req, res, next) => {
    if (req.method === 'POST' && req.body === undefined) {
      // Manejar solicitudes POST con cuerpo vacío
      return res.status(400).json({ error: 'Cuerpo de solicitud POST vacío' });
    }
  
    if (req.method === 'POST' && (!req.body.description || typeof req.body.completed !== 'boolean')) {
      // Manejar solicitudes POST con información no válida o atributos faltantes
      return res.status(400).json({ error: 'Solicitud POST inválida' });
    }
  
    if (req.method === 'PUT' && req.body === undefined) {
      // Manejar solicitudes PUT con cuerpo vacío
      return res.status(400).json({ error: 'Cuerpo de solicitud PUT vacío' });
    }
  
    if (req.method === 'PUT' && (!req.body.description || typeof req.body.completed !== 'boolean')) {
      // Manejar solicitudes PUT con información no válida o atributos faltantes
      return res.status(400).json({ error: 'Solicitud PUT inválida' });
    }
  
    next(); // Llama a la siguiente función en la cadena de middleware si no se encuentra ningún error
  };
  
  // Ruta para listar/editar
  router.get('/list', (req, res) => {
    res.send('Listar');
  });
  
  router.get('/edit/:id', (req, res) => {
    const taskId = req.params.id;
    res.send(`Editar tarea ${taskId}`);
  });
  
  // Usa el middleware de manejo de errores antes de las rutas del router
  router.use(handleErrors);
  










router.post('/', (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      description: req.body.description, // Se espera que el cuerpo de la solicitud tenga un campo "description"
      completed: false, // Por defecto, una tarea nueva se marca como incompleta
    };
  
    tasks.push(newTask);
    res.status(201).json(newTask); // Devuelve la tarea recién creada con el código de estado 201 (Created)
  });
  
  

// router.post('/', (req, res) => {
// 	res.status(201).send('Creada una nueva tarea');
// });

router.delete('/:tareaId', (req, res) => {
	const tareaId = (req.params.tareaId);
	tarea = tarea.filter(t => t.id !== tareaId);
	res.json({messege:'Tarea eliminada correctamente'});
});


router.put('/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const { descripcion, completa } = req.body;

    // Busca la tarea por ID
    const tarea = tasks.find(task => task.id === taskId);

    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }

    // Actualiza la tarea
    tarea.descripcion = descripcion || tarea.descripcion;
    tarea.completa = completa !== undefined ? completa : tarea.completa;

    res.json({ mensaje: 'Tarea actualizada exitosamente', tarea });
});


module.exports = router;