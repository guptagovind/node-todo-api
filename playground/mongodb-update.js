// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');
/*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aa38ff3335a3162e3098522')
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((resuts) => {
    console.log(resuts);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa37a9b0d05670303c2859d')
  }, {
    $set: {
      name: 'Govinda'
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  client.close();
});