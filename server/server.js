var express = require('express'),
    bodyParser = require('body-parser'),
    {mongoose} = require('./db/mongoose'),
    {Todo} = require('./models/todo'),
    {User} = require('./models/user');


var app = express();

app.listen(3000, () => {
  console.log('Started on port 3000');
});
