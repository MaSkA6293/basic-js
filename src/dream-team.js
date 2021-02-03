const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((acc, curr) => {
      if (typeof curr === 'string') {
        return [...acc, curr.trim().charAt(0).toUpperCase()]
      }
      else return acc
    }, []).sort().join('')
  } else return false
}
