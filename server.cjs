import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('contributions.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to the database');
  }
});

require = require("esm")(module);
module.exports = require("./server.cjs");

db.run(`
  CREATE TABLE IF NOT EXISTS contributions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    photo BLOB
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/contributions', (req, res) => {
  const { title, ingredients, instructions, photo } = req.body;

  db.run(
    'INSERT INTO contributions (title, ingredients, instructions, photo) VALUES (?, ?, ?, ?)',
    [title, ingredients, instructions, photo],
    (err) => {
      if (err) {
        console.error('Error saving contribution:', err);
        res.status(500).send('Error saving contribution');
      } else {
        res.status(200).send('Contribution saved successfully');
      }
    }
  );
});

app.get('/api/my-contributions', (req, res) => {
  db.all('SELECT * FROM contributions', (err, rows) => {
    if (err) {
      console.error('Error fetching contributions:', err);
      res.status(500).send('Error fetching contributions');
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
