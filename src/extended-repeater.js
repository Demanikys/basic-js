const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = []
  let tempStr = []
  console.log(str)
  console.log(options)
  if (str === null) {
    str = 'null'
  }
  if (options.addition === null) {
    options.addition = 'null'
  }
  let separator = []
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    separator.push(options.addition)
  }
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  separator = separator.join(options.additionSeparator)
  tempStr = `${str}${separator}`
  // tempStr.push(separator)
  console.log(separator)
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(tempStr)
  }
  result = result.join(options.separator)
  if (options.repeatTimes === undefined) {
    result = `${str}${options.addition}`
  }
  return result
};
