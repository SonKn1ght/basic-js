const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (2 ** disksNumber) - 1;
  const seconds = Math.floor(60 * 60 / turnsSpeed * turns);
  return {
    turns,
    seconds
  }
};
