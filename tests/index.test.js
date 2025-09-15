const { add, greet } = require('../src/index');

test('add adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('greet returns a greeting', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});
