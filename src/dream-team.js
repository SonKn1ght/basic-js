const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const trueMem = members
    .filter((value) => {
      return (typeof value === "string");
    })
    .map((current) => {
      return current.trim().toUpperCase();
    })
    .sort()
    .reduce((accum, current) => {
      return accum + current.slice(0, 1);
    }, ``)
  return trueMem;
};

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const trueMem = members
    .filter((value) => {
      return (typeof value === "string");
    })
    .map((current) => {
      return current.trim().toUpperCase();
    })
    .sort()
    .reduce((accum, current) => {
      return accum + current.slice(0, 1);
    }, ``)
  return trueMem;
};
