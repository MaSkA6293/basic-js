const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (checkValue(sampleActivity)) {
    return getAge(+sampleActivity)
  } else return false
};

function checkValue(val) {
  if (typeof val === 'string' && /^\d/.test(val) && val > 0 && val < 15) {
    return true
  }
  else return false
}
function getAge(activity) {
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = Math.log(MODERN_ACTIVITY / activity) / k
  return Math.round(t)
}