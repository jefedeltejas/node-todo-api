var express = require('express'),
    bodyParser = require('body-parser'),
    {ObjectID} = require('mongodb'),
    {mongoose} = require('./db/mongoose'),
    {Todo} = require('./models/todo'),
    {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/23746..
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // Valid id using isValid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};
