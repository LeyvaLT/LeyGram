var express = require('express');
var app = express();
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');

var app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req,res){
	res.render('index')
})
app.get('/signup', function(req,res){
	res.render('index')
})
app.get('/signin', function(req,res){
	res.render('index')
})

app.get('/api/pictures', function(req,res){
	var pictures = [

		{
			user:{
				username:"Leyva",
				avatar:'2.1.jpg'

			},
			url: '1.2.jpg',
			likes:10,
			liked:true,
			createdAt: new Date()

		},
		{
			user:{
				username:"Leyva",
				avatar:'2.1.jpg'

			},
			url: '1.2.jpg',
			likes:1,
			liked:false,
			createdAt: new Date().setDate(new Date().getDate() - 10)

		},
		{
			user:{
				username:"Leyva",
				avatar:'2.1.jpg'

			},
			url: 'office.jpg',
			likes:0,
			liked:false,
			createdAt: new Date().setDate(new Date().getDate() - 20)

		}

	];

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

	setTimeout(function(){
		res.send(pictures);
	}, 2000);
	

})

app.listen(3000,function(error){
	if (error) return console.log('Hubo un error'), process.exit(1);
	console.log('Servidor escuchando en el puerto 3000');
})