const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var result = '';
  if (members != null) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let timeMem = members[i].trim()
        result = `${result}${timeMem[0]}`;
      }
    }
  } else {
    return false
  }

  result = result.toUpperCase();
  return result.split('').sort().join('')
};
