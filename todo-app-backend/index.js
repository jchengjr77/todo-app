const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { getTodoData } = require('./helpers');

app.get('/', (req, res) => {
  res.status(200).send('Hello 17-356 People!');
});

app.get('/todos', (req, res) => {
  let data = getTodoData();
  res.status(200).send(data);
});

app.post('/addTodo', (req, res) => {
  console.log(req.body);
  res.status(200).send('New Todo received!');
});

app.listen(port, () => {
  console.log(`Todo-App listening on localhost:${port}`);
});
