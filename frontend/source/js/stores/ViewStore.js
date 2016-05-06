var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var CurrentPage = 'Homepage';
var Pages = [	'Homepage', 
							'RegistrationEmailPasswordDeveloper', 
							'RegistrationDetailsDeveloper',
							'RegistrationSkillsDeveloper',
							'RegistrationAboutMeDeveloper',
							'RegistrationEmailPasswordEmployer',
							'FindSection',
							'BackendPanelEmployer',
							'FullProfileDeveloper',
							'LogIn',
							'Contact'
						];

var getCurrentPage = {
  getMessage: function () {
    return CurrentPage;
  }
};

module.exports = Pages;