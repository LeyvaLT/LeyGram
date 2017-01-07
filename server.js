var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function(required,response){
	response.send('Hola mundo');
})

app.listen(3000,function(error){
	if (error) return console.log('Hubo un error'), process.exit(1);
	console.log('Servidor escuchando en el puerto 3000');
})