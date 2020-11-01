const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
	let a = 0;
	if (!Array.isArray(arr)){
		return 0;
	}
	else{
		return a = 1 + Math.max(a,...arr.map(e => this.calculateDepth(e)));
	}
 }
};
