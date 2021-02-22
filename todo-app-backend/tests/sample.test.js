const { getTodoData } = require('../helpers/todos');

test('gets well-formatted todo json data', () => {
  let todos = getTodoData();
  let testObj = todos[0];
  expect(testObj).toBeDefined();
  expect(testObj).toHaveProperty('id');
  expect(testObj).toHaveProperty('task');
  expect(testObj).toHaveProperty('due');
  expect(testObj).toHaveProperty('completed');
});
