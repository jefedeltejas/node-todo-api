var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

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


module.exports = {User};
