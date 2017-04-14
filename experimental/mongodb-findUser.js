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

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to get them users fo ya main.', err);
  });

  // db.collection('Users').find({
  //   _id: new ObjectID('58e99e2637fae86baa92e924')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get them users fo ya main.', err);
  // });

  db.collection('Users').find({
    _id: new ObjectID('58f03352948fe04f3bb8045a')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to get them users fo ya main.', err);
  });


  // db.collection('Users').find({}).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get them users fo ya main.', err);
  // });

  // db.collection('Users').find({
  //   name: 'Chad Butler'
  // }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Sorry dawg, can\'t find them users.', err);
  // });

  // db.collection('Users').find({
  //   name: 'Young Geezy'
  // }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Sorry dawg, can\'t find them users.', err);
  // });

  db.collection('Users').find({}).toArray().then((docs) => {
    console.log('Users list');
    console.log('Say dawg, I got them users fo ya main.');
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

  db.collection('Users').find().count().then((count) => {

  });

  db.close();
});
