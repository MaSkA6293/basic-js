const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (typeof date.getMonth === 'function' && Object.prototype.toString.call(date) === '[object Date]') {
    let month = date.getMonth()
    if (month === 11 || month === 0 || month === 1) {
      return "winter"
    } else if (month > 1 && month < 5) {
      return "spring"
    } else if (month > 4 && month < 8) {
      return "summer"
    } else if (month > 7 && month < 11) {
      return "fall"
    } else throw new Error()
  } else throw new Error()
};
