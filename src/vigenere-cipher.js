const CustomError = require("../extensions/custom-error");

const arrEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let tableForVigener = []

for (let i = 0; i < arrEn.length; i++) {
  tableForVigener.push([])
  for (j = i; tableForVigener[i].length < arrEn.length; j++) {
    if (j === arrEn.length) {
      j = 0;
      // console.log('новая строка')
    }
    // console.log(j)
    // console.log(arrEn[j])
    tableForVigener[i].push(arrEn[j])
  }
  // console.log('блок')
}
// console.log(tableForVigener)
class VigenereCipheringMachine {

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error
    }
    const keyUP = key.toUpperCase()
    const keyUPDried = keyUP.trim()
    console.log(keyUPDried)
    const messageUP = message.toUpperCase()
    const messageUPDried = messageUP.trim()
    console.log(messageUPDried)

    let keyStr = keyUPDried.padEnd(messageUPDried.length, keyUPDried)
    console.log(keyStr)
    let result = ''
    for (let i = 0, n = 0; i < messageUPDried.length; i++, n++) {
      if (arrEn.includes(messageUPDried[i])) {
        let indexMes = arrEn.indexOf(messageUPDried[i])
        let indexPas = arrEn.indexOf(keyStr[n])
        result = `${result}${tableForVigener[indexMes][indexPas]}`
      } else {
        result = `${result}${messageUPDried[i]}`
        n--
      }
    }
    return result
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error
    }
    const keyUP = key.toUpperCase()
    const keyUPDried = keyUP.trim()
    console.log(keyUPDried)
    const messageUP = message.toUpperCase()
    const messageUPDried = messageUP.trim()
    console.log(messageUPDried)

    let keyStr = keyUPDried.padEnd(messageUPDried.length, keyUPDried)
    console.log(keyStr)
    let result = ''
    for (let i = 0, n = 0; i < messageUPDried.length; i++, n++) {
      let indexPas = arrEn.indexOf(keyStr[n])
      if (arrEn.includes(messageUPDried[i])) {
        for (let j = 0; j < tableForVigener.length; j++) {
          if (tableForVigener[j][indexPas] === messageUPDried[i]) {
            result = `${result}${arrEn[j]}`
          }
        }
      } else {
        result = `${result}${messageUPDried[i]}`
        n--
      }
    }
    return result
  }
}

module.exports = VigenereCipheringMachine;
