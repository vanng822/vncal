
var amlich = require('amlich');
var util = require('util');

var VNDate = function(year, month, day, hour, minute, second, millisecond) {
	Date.call(this, year, month, day, hour, minute, second, millisecond);
};

util.inherits(VNDate, Date);

var today = function(timeZone) {
	var timeZone = timeZone || 7;
	return convert(new Date(), timeZone);
};

var convert = function(d, timeZone) {
	var timeZone = timeZone || 7;
	var result = amlich.convertSolar2Lunar(d.getDate(), d.getMonth() + 1, d.getFullYear(), timeZone);
	return new VNDate(result[2], result[1], result[0], d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
};

module.exports = {
	VNDate : VNDate,
	today : today,
	convert : convert
};
