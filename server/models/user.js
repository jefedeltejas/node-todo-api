const mongoose = require('mongoose'),
      validator = require('validator'),
      jwt = require('jsonwebtoken')
      _ = require('lodash');


var UserSchema = new mongoose.Schema({
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

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this,
      access = 'auth',
      token = jwt.sign({_id: user._id.toHexString(), access}, 'abc137').toString();

      user.tokens.push({access, token});

      return user.save().then(() => {
        return token;
      });
};

var User = mongoose.model('User', UserSchema);

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
