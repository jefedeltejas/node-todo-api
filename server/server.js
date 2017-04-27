var {mongoose} = require('./db/mongoose'),
    {Todo} = require('./models/todo'),
    {User} = require('./models/user');

// var newTodo = new Todo({
//   text: 'Laga mat'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
//
// var otherTodo = new Todo({
//   text: 27
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo item', e);
// });


// User
// email -- require it -- trim it -- set type -- set min length of 1



// var user = new User({
//   email: 'user@yomama.com   '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user.');
// });
