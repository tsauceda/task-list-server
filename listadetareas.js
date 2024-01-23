const tasks = [
	{
		id: 1, 
		isCompleted: true, 
		description: "Ir al gimnacio"
	},
	{
		id: 2, 
		isCompleted: true, 
		description: "Hacer cambio de aceite al carro"
	},
	{
		id: 3, 
		isCompleted: false, 
		description: "Comprar comida al gato"
	},
	{id: 4, 
		isCompleted: true, 
		description: "Llevar a Edrick al dentista"
	},
	{
		id: 5, 
		isCompleted: false, 
		description: "Lavar la ropa"
	}
	];

app.get('/tasks', (req, res) => {
    res.json('tasks')
});