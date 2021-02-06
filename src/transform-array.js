const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  return arr.reduce((acc, curr, index, array) => {
    switch (curr) {
      case "--double-next":
        if (array[index + 1] !== undefined) {
          return [...acc, array[index + 1]]
        } else return acc
      case "--double-prev":
        if (index - 1 < 0) { return acc }
        if (array[index - 2] !== "--discard-next") {
          return [...acc, acc[acc.length - 1]]
        } else return acc
      case "--discard-prev":
        if (index - 1 < 0) { return acc }
        if (array[index - 2] !== "--discard-next") {
          return acc.slice(0, acc.length - 1)
        } else return acc
      case "--discard-next": return acc
      default:
        if (array[index - 1] !== "--discard-next") {
          return [...acc, curr]
        } else {
          return acc
        }
    }
  }, [])
};
