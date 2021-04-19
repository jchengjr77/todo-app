const fakeData = require('./fakeToDo.json');

const getTodoData = (name) => {
  return fakeData[name];
};

module.exports = { getTodoData };
