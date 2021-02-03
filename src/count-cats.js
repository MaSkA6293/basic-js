const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  backyard.forEach(yard => {
    yard.forEach(yardItem => {
      if (yardItem === '^^') {
        counter++
      }
    })
  });
  return counter ? counter : 0
};
