const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    var j = 1;
    // console.log(arr)
    if (arr instanceof Array) {
      // j++
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
          // console.log(j)
          return j + this.calculateDepth(arr[i])
        }
      }
    }
    console.log(j)
    return j
  }
}


// считает плоские массивы и работает рекурсивно, но прекращает работу наткнувшись на последний вложенный плоский массив и не сканирует дальше родительский массив