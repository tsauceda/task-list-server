const express = require('express');
 const app = express();
 const PORT = 3000;

 const tasksRouter = require("./list-view-router.js");
 const tasksIdRouter = require("./list-edit-router.js");

app.use(express.json());


 app.use('/tasks', tasksRouter);
 app.use('/tasksId', tasksIdRouter);


 

app.listen(PORT, () => {
	console.log('La aplicacion esta escuchando en el puerto ${PORT}');
});