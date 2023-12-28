const express = require('express');
const { LearningPackage } = require('src/models.js')
const {getAllLearningPackages} = require("./db");

const PORT = 3000
const app = express()

app.use(express.json());
console.log(__dirname)

app.get('/', function(req, res){
  res.sendFile('/angular/dist/index.html', {root:__dirname})
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
  getAllLearningPackages(req,res)
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
