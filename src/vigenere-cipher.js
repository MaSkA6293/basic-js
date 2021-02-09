const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(revers) {
    this.getDictionary()
    if (revers === false) {
      this.reverse = false;
    }
  }
  reverse = true;
  alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  decrypt = (string, key) => {
    this.checkArgs(string, key)
    let [upperStr, longKey] = this.getUpperStrAndLongKey(string, key)
    let resultString = this.getResultStringDecrypt(longKey, upperStr)
    return this.getResultDecrypt(string, resultString)
  }

  encrypt = (string, key) => {
    this.checkArgs(string, key)
    let [upperStr, longKey] = this.getUpperStrAndLongKey(string, key)
    let resultString = this.getResultStringEncrypt(upperStr, longKey)
    return this.getResultEncrypt(string, resultString)
  }

  getDictionary = () => {
    this.dictionary = new Array(26)
    let alphabetY = ''
    for (let i = 0; i < this.alphabet.length; i++) {
      this.dictionary[i] = new Array(26)
      alphabetY = this.alphabet.slice(i, this.alphabet.length) + this.alphabet.slice(0, i)
      for (let j = 0; j < this.alphabet.length; j++) {
        this.dictionary[i][j] = alphabetY[j]
      }
    }
  }

  getResultStringEncrypt = (upperStr, longKey) => {
    let resultString = ''
    for (let i = 0; i < upperStr.length; i++) {
      let indexOfLetterX = this.alphabet.indexOf(upperStr[i])
      let indexOfLetterY = this.alphabet.indexOf(longKey[i])
      if (indexOfLetterX === -1) {
        resultString += upperStr[i]
      } else {
        resultString += this.dictionary[indexOfLetterX][indexOfLetterY]
      }
    }
    return resultString
  }

  getUpperStrAndLongKey = (string, key) => {
    let upperStr = string.toUpperCase().replace(/\s+/g, "")
    let longKey = key
    while (upperStr.length > longKey.length) {
      longKey += key.repeat(1)
    }
    longKey = longKey.slice(0, upperStr.length).toUpperCase()
    return [upperStr, longKey]
  }

  getResultEncrypt = (string, resultString) => {
    let marker = 0
    if (this.reverse === false) {
      let arrReverse = string.toUpperCase().split(' ').reverse()
      resultString = resultString.split('').reverse().join('')
      return arrReverse.reduce((acc, curr) => {
        let spliceWord = resultString.slice(marker, marker + curr.length)
        marker += curr.length
        return acc.concat(spliceWord)
      }, []).join(" ")
    }
    let arr = string.toUpperCase().split(' ')
    return arr.reduce((acc, curr) => {
      let spliceWord = resultString.slice(marker, marker + curr.length)
      marker += curr.length
      return acc.concat(spliceWord)
    }, []).join(" ")
  }

  getResultDecrypt = (string, out) => {
    let marker = 0
    if (this.reverse === false) {
      let arrReverse = string.toUpperCase().split(' ').reverse()
      out = out.split('').reverse().join('')
      return arrReverse.reduce((acc, curr) => {
        let spliceWord = out.slice(marker, marker + curr.length)
        marker += curr.length
        return acc.concat(spliceWord)
      }, []).join(" ")
    } else {
      let arr = string.toUpperCase().split(' ')
      return arr.reduce((acc, curr) => {
        let spliceWord = out.slice(marker, marker + curr.length)
        marker += curr.length
        return acc.concat(spliceWord)
      }, []).join(" ")
    }
  }

  checkArgs = (a, b) => {
    if (a === undefined || b === undefined) {
      throw new Error
    }
  }

  getResultStringDecrypt = (longKey, upperStr) => {
    let resultString = ''
    for (let i = 0; i < longKey.length; i++) {
      let indexLetter = this.alphabet.indexOf(longKey[i])
      let arrayOfindexLetter = this.dictionary[indexLetter]
      let indexDecriptLetter = arrayOfindexLetter.indexOf(upperStr[i])
      if (indexDecriptLetter === -1) {
        resultString += upperStr[i]
      } else {
        resultString += this.alphabet[indexDecriptLetter]
      }
    }
    return resultString
  }
}

module.exports = VigenereCipheringMachine;
