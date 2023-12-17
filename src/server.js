const  express = require('express');


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
  client.connect((err, client, done) => {
    if (err) {
      console.error('Error acquiring client from pool:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }

    client.query('SELECT * FROM LearningPackages', (err, result) => {
      done(); // Release the client back to the pool

      if (err) {
        console.error('Error retrieving learning packages:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }

      const learningPackages = result.rows;
      res.json(learningPackages);
    });
  });
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
