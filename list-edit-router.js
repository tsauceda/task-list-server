const {Router} = requiere('express')

const router = Router();


router.post('/', (req, res) => {
	res.status(201).send('Creada una nueva tarea');
});

router.delete('/:tareaId', (req, res) => {
	const tareaId = (req.params.tareaId);
	tarea = tarea.filter(t => t.id !== tareaId);
	res,json({messege:'Tarea eliminada correctamente'});
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