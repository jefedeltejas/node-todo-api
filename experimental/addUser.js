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


  db.collection('Users').insertOne({
    name: 'new jobseeker',
    age: 32,
    location: 'Helsingfors'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to add user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Mölmo Impala',
  //   age: 32,
  //   location: 'Sverige'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // var connect = db.collection('Users').find({});
  // console.log(connect);

  // db.collection('Todos').find({
  //   _id: new ObjectID('58e2b5a849c8d511eada5e68')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  // db.collection('Users').find().count().then((count) => {
  //
  // });

  // db.collection('Todos').find().count().then((count) => {
  //
  // });


  db.close();
});
