var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var candidatesDetails = {
	candidatesData: [
	{
		id: '01',
		firstName: 'John',
		surname: 'Smith',
		jobTitle: 'Frontend Developer',
		photoSrc: 'images/photo1.jpg'
	},
	{
		id: '02',
		firstName: 'Michael',
		surname: 'Jordan',
		jobTitle: 'Backend Developer',
		photoSrc: 'images/photo2.jpg'
	},	
	{
		id: '03',
		firstName: 'Rob',
		surname: 'Johnson',
		jobTitle: 'UI Designer',
		photoSrc: 'images/photo3.jpg'
	}
	]
};

module.exports = candidatesDetails;