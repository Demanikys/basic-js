const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  var result = 0;
  var k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof (activity) !== String) {
    return false;
  } else if (parseFloat(activity) <= 0 || parseFloat(activity) > 15) {
    return false;
  } else if (parseFloat(activity) != activity) {
    return false;
  } else {
    activity = parseFloat(activity);
    result = (Math.log(MODERN_ACTIVITY / activity)) / k;
    return Math.ceil(result);
  }
};
