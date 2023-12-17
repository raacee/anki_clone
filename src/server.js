import express from 'express';
import { client } from 'db'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function(req,res){

})

app.get('/api/learningPackages', async (req, res) => {
  await client.connect()
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
