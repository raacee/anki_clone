const express = require('express');
const { getAchievedLearningPackages, addLearningPackageToAchievements, removeLearningPackageFromStudy, addLearningPackageToStudy, deleteFact, getLearningFact, deletePackage, addNewLearningFact, addLearningFactToLearningPackage, addNewLearningPackage, getAllLearningPackages, ulpWithQuestions, getInactiveLearningPackages, editPackageByID } = require("./db.js");

const PORT = 4000
const app = express()

app.use(express.json());


app.get('/', function(req, res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/home-page', function(req, res){
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
app.get('/login', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/profile', function(req,res){
	res.sendFile(__dirname + '/angular/dist/index.html')
})
app.get('/about-page', function(req,res){
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

app.get('/api/learningpackages',
	async function(req,res){
	res.json(await getAllLearningPackages())
})
app.get('/api/learningpackages/:id',
	async function(req,res){
		res.json(await ulpWithQuestions(req.params['id']))
})
app.post('/api/learningpackages',
	async function (req,res){
		const changes = req.body
		await addNewLearningPackage(changes)
		res.sendStatus(201)
	}
)
app.get('/api/non-study-packages', async function(req, res){
	res.json(await getInactiveLearningPackages())
})
app.post('/api/learningfact/:id', async function(req, res){
	await editPackageByID(req.params['id'], req.body)
	res.sendStatus(200)
})
app.get('/api/learningfact/:id', async function(req, res){
	const lf = await getLearningFact(req.params['id'])
	res.json(lf)
})
app.post('/api/learningpackages/:id', async function(req,res){
		const { LF_ID } = await addNewLearningFact(req.body)
		await addLearningFactToLearningPackage(LF_ID, req.params['id'])
		res.sendStatus(201)
})
app.delete('/api/learningfact/:id', async function(req,res){
	await deleteFact(req.params['id'])
})
app.delete('/api/learningpackages/:id', async function(req,res){
	await deletePackage(req.params['id'])
})
app.patch('/api/learningpackages/:id/add-to-study', async function(req,res){
	await addLearningPackageToStudy(req.params['id'])
})
app.patch('/api/learningpackages/:id/remove-package', async function(req,res){
	await removeLearningPackageFromStudy(req.params['id'])
})
app.patch('/api/learningpackages/:id/achieve', async function(req,res){
	await addLearningPackageToAchievements(req.params['id'])
})
app.get('/api/achieved', async function(req,res){
	res.json(await getAchievedLearningPackages())
})




app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
