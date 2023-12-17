const express = require('express');

const app = express();

const PORT = 3000;

app.get('/tasks', (req, res) => {
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

	res.json(tasks);
});

app.listen(PORT,() => {
	console.log('Server is running on PORT ${PORT}');
});