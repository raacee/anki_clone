const express = require('express');
const { getAllLearningPackages } = require("./db.js");

const PORT = 3000
const app = express()

app.use(express.json());
console.log(__dirname)

app.get('/', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/home', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/non-study-packages', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})

app.get('/main.js', function(req, res){
	res.sendFile(__dirname + '/angular/dist/main.js')
})

app.get('/vendor.js', function(req, res){
	res.sendFile(__dirname + '/angular/dist/vendor.js')
})

app.get('/polyfills.js', function(req, res){
	res.sendFile(__dirname + '/angular/dist/polyfills.js')
})

app.get('/runtime.js', function(req, res){
	res.sendFile(__dirname + '/angular/dist/runtime.js')
})

app.get('/styles.css', function(req, res){
	res.sendFile(__dirname + '/angular/dist/styles.css')
})

app.get('/api/learningPackages', function(req, res) {
	const allLearningPackages = getAllLearningPackages()
	console.log(allLearningPackages)
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
