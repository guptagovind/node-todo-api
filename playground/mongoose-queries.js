const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');




var id = '5aa4194a2a8dd80309da1e62';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

const userId = '5aa3abd78bcd980476a2574c';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('No User found');
  }
  console.log('find by Id user ', user);
}).catch((e) => {
  console.log(e);
});
