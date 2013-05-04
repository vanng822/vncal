var assert = require('assert');
var vows = require('vows');

vncal = require('../index.js'), VNDate = vncal.VNDate;

vows.describe('Test suite for calc').addBatch({
	'today should return a Date': function() {
		assert.ok(vncal.today() instanceof VNDate);
	}	
}).export(module);
