const express = require('express');

const app = express();

const PORT = 5000;

const tasksRouter = require('./list-view-router.js');

const tasksIdRouter = requiere('./list-edit-router.js');

app.use('/tasks',tasksRouter);

app.use('/tasksId',tasksIdRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
