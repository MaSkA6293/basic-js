const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let maxDeep = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter = this.calculateDepth(arr[i]) + 1;
        if (counter > maxDeep) {
          maxDeep = counter;
        }
      }
    }
    return maxDeep
  }
};