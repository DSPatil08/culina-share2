// server.js
import express from 'express';
import cors from 'cors';
import indianRecipes from './indianRecipes';

const app = express();
const port = 5000;

app.use(cors());

app.get('/indian-recipes', (req, res) => {
  res.json(indianRecipes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
