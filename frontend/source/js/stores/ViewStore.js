var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var views = [	'Homepage', 
							'RegistrationEmailPasswordDeveloper', 
							'RegistrationDetailsDeveloper',
							'RegistrationSkillsDeveloper',
							'RegistrationAboutMeDeveloper',
							'RegistrationEmailPasswordEmployer',
							'FindSection'

			]

module.exports = views;