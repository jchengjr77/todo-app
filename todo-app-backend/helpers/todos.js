const fakeData = require('../fakeToDo.json');

/**
 * Wrapper function for grabbing Todo Data.
 * NOTE: this provides fake data for now.
 */
const getTodoData = () => {
  return fakeData;
};

module.exports = { getTodoData };
