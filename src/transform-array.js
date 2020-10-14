const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (arr instanceof Array) {
    if (arr.includes(`--discard-next`) || arr.includes(`--discard-prev`) || arr.includes(`--double-next`) || arr.includes(`--double-prev`)) {
      var myArr = arr;
      // console.log(arr)
      for (let i = 0; i < myArr.length;) {
        switch (myArr[i]) {
          case (`--discard-next`):
            if (myArr[i + 1] === undefined) {
              myArr.splice(i, 1)
              break
            }
            myArr.splice(i, 2, '')
            i++
            break;
          case (`--discard-prev`):
            if (i === 0) {
              myArr.splice(i, 1)
              break
            }
            myArr.splice(i - 1, 2, '')
            i++
            break;
          case (`--double-next`):
            if (myArr[i + 1] === undefined) {
              myArr.splice(i, 1)
              break
            }
            myArr.splice(i, 1, myArr[i + 1])
            i++
            break;
          case (`--double-prev`):
            if (i === 0) {
              myArr.splice(i, 1)
              break
            }
            myArr.splice(i, 1, myArr[i - 1])
            i++
            break;
          default:
            i++
        }
      }
      for (let i = 0; i < myArr.length;) {
        if (myArr[i] === '') {
          myArr.splice(i, 1)
        } else {
          i++
        }
      }
      return myArr
    } else {
      return arr;
    }

  } else {
    throw new Error
  }

};
