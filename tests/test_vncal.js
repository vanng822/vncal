var assert = require('assert');
var vows = require('vows');

vncal = require('../index.js');

vows.describe('Test suite for calc').addBatch({
	'today should return a Date': function() {
		assert.ok(vncal.today() instanceof Date);
		//console.log(vncal.today().toISOString())
	}	
}).export(module);
