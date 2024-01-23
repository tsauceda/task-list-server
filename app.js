const express = require('express');

const app = express();

const PORT = 5000;


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

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });