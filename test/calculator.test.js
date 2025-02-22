const calculator = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
