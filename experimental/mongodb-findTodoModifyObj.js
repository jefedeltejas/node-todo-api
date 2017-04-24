const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('')
  }, {
    $set: {
      text: 'some text here'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.collection('Todos').find({
  //   _id: new ObjectID('58e99e2637fae86baa92e924')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to get them todos fo ya main.', err);
  // });




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
