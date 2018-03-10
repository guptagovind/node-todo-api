// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongodb Server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');

 /* db.collection('Todos').deleteMany({text:'East lunch'}).then((result) =>{
    console.log(result);
  });

 db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
   console.log(result);
 });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5aa380d6335a3162e309818b')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  client.close();
});