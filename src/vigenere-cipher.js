const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this._flagReverse = flag;
  }

  getDict() {
    let l = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``)
    let square = [];
    for (var i = 0; i < l.length; i++) {
      square[i] = l.slice(i).concat(l.slice(0, i))
    }
    return square;
  }

  encrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw new Error();
    }

    let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let dict = this.getDict();
    let result = ``;
    let j = 0;

    if (key.length < message.length) {
      let step = message.length - key.length;
      for (let i = 0 ; i < step; i++) {
        key+=key[i];
      }
    }
    message = message.toUpperCase();
    key = key.toUpperCase();


    message.split(``).map((cur, i) => {
      if (alphabet.indexOf(cur) === -1) {
        result += cur;
        j -= 1;
        return ;
      }
      i += j;

      for (let stringDict of dict) {
        if (stringDict[0] === key[(i)]) {
          result += stringDict[alphabet.indexOf(cur)]
        }
      }
    })

    return (this._flagReverse ? result : result.split(``).reverse().join(``))
  }

  decrypt(message = null, key = null) {
    if (message === null || key === null) {
      throw new Error();
    }
    let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let dict = this.getDict();
    let result = ``;
    let j = ``;

    if (key.length < message.length) {
      let step = message.length - key.length;
      for (let i = 0 ; i < step; i++) {
        key+=key[i];
      }
    }
    message = message.toUpperCase();
    key = key.slice(0, message.length).toUpperCase();

    key.split(``).map((cur, i) => {
      if (alphabet.indexOf(message[i]) === -1) {
        result += message[i];
        j -= 1;
        return ;
      }
      let k = i + j;

      for (let stringDict of dict) {
        if (stringDict[0] === key[(k)]) {
          result += alphabet[stringDict.indexOf(message[i])]
        }
      }
    })

    return (this._flagReverse ? result : result.split(``).reverse().join(``))
  }
}


module.exports = VigenereCipheringMachine;
