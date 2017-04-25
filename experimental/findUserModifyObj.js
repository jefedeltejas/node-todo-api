// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'pimpC', age: 34};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('58fe02e0a2e66a51a4e9ffd7')
// }, {
//   $set: {
//     name: 'Phat Pat',
//     location: 'H-Town'
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58fe02e0a2e66a51a4e9ffd7')
}, {
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //
  // // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Mr. 3-2',
  //   age: 37,
  //   location: 'Atlanta'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  //

  db.close();
});
