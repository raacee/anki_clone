const express = require('express');
const { getAllLearningPackages } = require("./db.js");

const PORT = 4000
const app = express()

app.use(express.json());


app.get('/', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/home', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/non-study-packages', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/lesson-list/:id', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/lesson/:id', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/test-page1', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/achievements-page', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/package-creation-page', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/learning-facts-page/:id', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/modify-learning-fact-page/:packageId/:factId', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/add-learning-fact-page/:packageId', function(req,res){
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


app.get('/api/learningpackages', async function(req,res){
	res.json(await getAllLearningPackages())
})


app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
