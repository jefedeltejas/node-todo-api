const mongoose = require('mongoose'),
      validator = require('validator');

// {
//   email: 'jj@dashiell.com',
//   password: 'jkljklfsdjkfsdjkfjksdl',
//   tokens: [{
//     access: 'auth',
//     token: 'jkfjkfjkfsdjkfsdjkfsdjkfsdjk'
//   }]
// }

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
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
