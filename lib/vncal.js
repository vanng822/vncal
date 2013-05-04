
var amlich = require('amlich');


var today = function(timeZone) {
	var timeZone = timeZone || 7;
	var d = new Date(), result;
	result = amlich.convertSolar2Lunar(d.getDate(), d.getMonth() + 1, d.getFullYear(), timeZone);
	return new Date(result[2], result[1], result[0], d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
};

module.exports = {
	today : today
};
