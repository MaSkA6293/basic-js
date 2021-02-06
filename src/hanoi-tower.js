const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let step = 1
  let result = 1
  let turns = getTurns(result)
  let time = turns / (turnsSpeed / 3600)
  function getTurns(result) {
    if (step === disksNumber) {
      return result
    } else {
      step++;
      result = result * 2 + 1
      return getTurns(result)
    }
  }
  return { turns: turns, seconds: Math.floor(time) }
}

