const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	let str = parseFloat(sampleActivity, 10);
	let number = false;
	if (typeof sampleActivity == 'String' && str > 0 && str < 15) {
		number = Math.ceil(Math.log(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD));
		return number;
	}
	return number;
	// ТЕСТЫ ПРОХОДЯТ БОЛЬШЕ 60 СЕКУНД
};
