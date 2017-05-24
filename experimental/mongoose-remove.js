const {ObjectID} = require('mongodb'),
      {mongoose} = require('./../server/db/mongoose'),
      {Todo} = require('./../server/models/todo'),
      {User} = require('./../server/models/user');

//  Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({'_id": "5925b21f5ae3302059824788'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5925b21f5ae3302059824788').then((todo) => {
  console.log(todo);
});
