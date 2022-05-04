function stringLength(string) {

  let count = 0;

  for(let _char of string) {
      count++;
  }

  return count;
}

console.log(stringLength('hello'));

module.exports = stringLength;