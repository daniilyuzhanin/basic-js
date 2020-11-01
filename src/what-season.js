const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if(toString.call(date) !== '[object Date]')
  {
    throw new Error('Not date')
  }

  let ourDate = date.getMonth();

  if (ourDate === 11 || ourDate < 2) {
	  return 'winter';
  }
  if (ourDate >= 2 && ourDate < 5) {
	  return 'spring'
  }
  if (ourDate >= 5 && ourDate < 8) {
	  return 'summer'
  }
  if (ourDate >= 8 && ourDate < 11) {
	  return 'autumn'
  }
};
