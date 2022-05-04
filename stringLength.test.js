const stringLength = require('./stringCount');

test('stringLength should return the length of the string', () => {
  expect(stringLength('hello')).toBe(5);
});
