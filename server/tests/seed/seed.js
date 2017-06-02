const {ObjectID} = require('mongodb')
      jwt = require('jsonwebtoken'),
      {Todo} = require('./../../models/todo'),
      {User} = require('./../../models/user'),
      userOneId = new ObjectID(),
      userTwoId = new ObjectID(),
      users = [{
        _id: userOneId,
        email: 'jj@example.com',
        password: 'userOnePass',
        tokens: [{
          access: 'auth',
          token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }]
      }, {
        _id:userTwoId,
        email: 'quincy@example.com',
        password: 'userTwoPass',
        tokens: [{
          access: 'auth',
          token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }]
      }],
      todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 777,
  _creator: userTwoId
}],
    populateTodos = (done) => {
      Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
      }).then(() => done());
    },
    populateUsers = (done) => {
      User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
      }).then(() => done());
    };

module.exports = {todos, populateTodos, users, populateUsers};
