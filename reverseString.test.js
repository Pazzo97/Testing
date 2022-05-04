const reverseString = require('./reverseString');

test('reverseString should return the string in reverse', () => {
  expect(reverseString('hello')).toBe('olleh');
});