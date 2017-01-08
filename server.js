var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(required,response){
	response.render('index')
})
app.get('/signup', function(required,response){
	response.render('index')
})
app.get('/signin', function(required,response){
	response.render('index')
})

app.listen(3000,function(error){
	if (error) return console.log('Hubo un error'), process.exit(1);
	console.log('Servidor escuchando en el puerto 3000');
})