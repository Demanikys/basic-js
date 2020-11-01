const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],
  new: true,
  getLength() {
    return this.chain.length
  },
  addLink(value = 'no') {
    console.log(this.chain)
    console.log(this.new)
    if (this.new === true) {
      this.chain = []
      this.new = false
    }
    if (value !== 'no') {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push(`(  )`)
    }
    return this
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position < this.chain.length && (position > 0 || position === 0)) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw new Error
    }

  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.new = true;
    return this.chain.join(`~~`)
  }
};

module.exports = chainMaker;
