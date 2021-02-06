const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.currentChain.push(`( )`)
      return this;
    }
    this.currentChain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (this.currentChain[position] === undefined) {
      this.currentChain = []
      throw new Error
    }
    this.currentChain = this.currentChain.filter((el, index) => {
      if (index + 1 !== position) {
        return el
      }
    })
    return this;
  },
  reverseChain() {
    this.currentChain.reverse()
    return this;
  },
  finishChain() {
    let a = [...this.currentChain]
    this.currentChain = []
    return [...a].join('~~')
  }
};

module.exports = chainMaker;
