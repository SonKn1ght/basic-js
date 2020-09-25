const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    count++
    arr.some((cur) => {
      if (Array.isArray(cur)) {
        return count += this.calculateDepth(arr.flat());
      }
    })
    return count;
  };
};




