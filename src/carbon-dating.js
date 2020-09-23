const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  const sample = parseInt(sampleActivity);
  if (isNaN(sample)) {
    return false;
  }
  if (sample <= 0 || sample > 12) {
    return false;
  }
  const t = HALF_LIFE_PERIOD / (0.693 / (Math.log(MODERN_ACTIVITY / sampleActivity)))
  return Math.ceil(t);
};