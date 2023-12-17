import express from 'express';
import {client} from "./db";

const port = 3000
const app = express()

app.use(express.json());

app.get('/', function(req,res){
  res.sendStatus(200)
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
