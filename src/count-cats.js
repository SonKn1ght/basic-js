const CustomError = require("../extensions/custom-error");

module.exports = function countCats(Arr) {
  let count = 0;
  Arr.forEach((current) => {
    const ArrCats = current.filter((value) => {
      return value === "^^";
    })
    count += ArrCats.length;
  })
  return count;
};
