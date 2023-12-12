const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
  user: 'learningDbUser',
  host: 'localhost',
  database: 'LearningFactDb',
  password: 'password',
  port: 5432,
});
app.use(express.json());
app.get('/api/learningPackages', (req, res) => {
  pool.connect((err, client, done) => {
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
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
