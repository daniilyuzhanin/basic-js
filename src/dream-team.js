const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) 
		return false;

	let arr = [];
	let name = members.filter(a => typeof a === 'string');
	for (let i = 0; i < name.length; i++) {
		arr.push(name[i].trim()[0]);
	}
	return arr.join('').toUpperCase().split('').sort().join('');
};	
