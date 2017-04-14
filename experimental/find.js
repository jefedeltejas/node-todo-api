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

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to get them todos fo ya main.', err);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('58e99e2637fae86baa92e924')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get them todos fo ya main.', err);
  // });

  // db.collection('Todos').find({}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get them todos fo ya main.', err);
  // });


  db.collection('Users').find({}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Sorry dawg, can\'t find them users.', err);
  });

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


  db.close();
});
