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

  db.collection('Todos').find({
    _id: new ObjectID('58ff10b1e1db1c716c6f64f4')
  }).toArray().then((docs) => {
    console.log(_id);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to get them todos fo ya main.', err);
  });

  db.close();
});
