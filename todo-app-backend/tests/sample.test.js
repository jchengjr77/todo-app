const { getTodoData } = require('../helpers');

test('gets well-formatted todo json object', () => {
  let data = getTodoData();
  let testObj = data[0];
  expect(testObj).toBeDefined();
  expect(testObj).toHaveProperty('id');
  expect(testObj).toHaveProperty('task');
  expect(testObj).toHaveProperty('due');
  expect(testObj).toHaveProperty('completed');
});
