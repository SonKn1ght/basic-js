const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _chain : [],
  getLength() {
    return this._chain.length;
  },
  addLink(value = ` `) {
    this._chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1) {
      this._chain = [];
      throw new Error();
    }
    this._chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this._chain.slice().reduce((acc, cur, i) => {
      if (i === 0 && this._chain.slice().length == 1) {
        return acc + `( ${cur} )`;
      }
      if (i === 0) {
        return acc + `( ${cur} )~`;
      }
      if (i === this._chain.slice().length - 1) {
        return acc + `~( ${cur} )`;
      }
      return acc + `~( ${cur} )~`
    }, ``)
    this._chain = [];
    return arr;
  }
};

module.exports = chainMaker;



// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');


//
// console.log(chainMaker.addLink('8.963').reverseChain()
//   .reverseChain().reverseChain().reverseChain()
//   .addLink({0: 'first', 1: 'second', 'length': 2})
//   .reverseChain().addLink(3.14).addLink('DEF')
//   .reverseChain().finishChain())