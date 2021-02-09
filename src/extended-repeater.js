const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addStr = ''
  let out = ''
  options.separator = options.separator ? options.separator : "+"
  options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes
  options.addition = options.addition === undefined ? "" : options.addition

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addStr += `${options.addition}`
    if (i + 1 !== options.additionRepeatTimes) {
      addStr += `${options.additionSeparator}`
    }
  }
  let newStr = `${str}${addStr}`
  if (options.repeatTimes === undefined) {
    return newStr
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    out += `${newStr}`
    if (i + 1 !== options.repeatTimes) {
      out += `${options.separator}`
    }
  }
  return out
};