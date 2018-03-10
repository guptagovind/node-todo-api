// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');

/*  db.collection('Todos').find({_id:new ObjectID('5aa3734412255402ea7bdf30')}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log('Unable to fetch data ', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
    //console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log('Unable to fetch data ', err);
  });*/

  db.collection('Users').find({name: 'Govind Gupta'}).toArray().then((docs) => {
    console.log(`Users docs`);
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log(`error in fetching users ${err}`);
  });

  client.close();
});