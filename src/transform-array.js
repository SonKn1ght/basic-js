const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  return arr.reduce((acc, cur, i) => {
    if (cur == `--discard-next` || cur == `--double-prev` || cur == `--double-next` || cur == `--discard-prev`) {
      return acc;
    }

    if (arr[i - 1] == `--discard-next`) {
      return acc;
    }

    if (arr[i - 1] == `--double-next`) {
      acc.push(cur, cur);
    } else {
      acc.push(cur);
    }

    if (arr[i + 1] == `--discard-prev`) {
      acc.splice(acc.length - 1, 1)
    }


    if (arr[i + 1] == `--double-prev`) {
      acc.push(cur)
    }
    return acc;
  }, []);
};