const express = require('express');
const jwt = require("jsonwebtoken")
require("dotenv").config();

 const app = express();
// const PORT = 3000;


 const tasksRouter = require("./list-view-router.js");
 const tasksIdRouter = require("./list-edit-router.js");
 
 const users = [
	{
		email: "email@email.com",
		password: 987654,
		rol: "clients",
	},
	{
		email: "melissa@email.com",
		password: 987654,
		rol: "admin"
	}
 ];

app.use(express.json());


 app.use('/tasks', tasksRouter);
 app.use('/tasksId', tasksIdRouter
 );


app.post("/login", (req, res) => {
	const { email, password } = req.body;

	const user = users.find( 
		(user) => user.password === password && user.email === email);

	if (user) {
		const token = jwt.sign(user, process.env.SECRET);
		res.status(200).json({ token });
	} else {
		res.status(401)
	}
});
 
app.get("/secret", (req, res) => {

const token = req.headers.authorization;

jwt.verify(token, process.env.SECRET, (err, decoded) => {

	if(err) return res.status(400).json({ err });
console.log(decoded);
	
});
});

app.listen(process.env.PORT, () => {
	console.log('La aplicacion escuchando en el puerto ${process.env.PORT}');
});

