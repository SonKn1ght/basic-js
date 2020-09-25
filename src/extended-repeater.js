const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {
  repeatTimes: 0,
  separator: '+',
  addition: '',
  additionRepeatTimes: 0,
  additionSeparator: '|'
}) {
  let {repeatTimes = 1, separator = `+`, addition =``, additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let result = ``;
  for (let i = 0; i < repeatTimes; i++) {
    result += `${str}`;
    let add = ``;
    for (let i = 0; i < additionRepeatTimes; i++) {
      add += `${addition}${additionSeparator}`;
    }
    addResult = add.slice(0, add.length - additionSeparator.length)
    result += `${addResult}${separator}`;
  }
  return result.slice(0, result.length - separator.length);
};

