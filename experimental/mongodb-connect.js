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

  // db.collection('Todos').insertOne({
  //   text: 'Han äter en smörgås',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Chad Butler',
  //   age: 34,
  //   location: 'Port Arthur'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Mr. 3-2',
    age: 37,
    location: 'Atlanta'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to add user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  // var connect = db.collection('Users').find({});
  // console.log(connect);

  //
  // db.collection('Users').find().count().then((count) => {
  //
  // });

  // db.collection('Todos').find().count().then((count) => {
  //
  // });


  db.close();
});
