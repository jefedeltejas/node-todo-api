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

// deleteMany
// db.collection('Todos').deleteMany({text: 'Han äter en smörgås'}).then((result) => {
//     console.log(result);
//   });


// deleteOne
db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});



// findOneAndDelete



  db.close();
});
