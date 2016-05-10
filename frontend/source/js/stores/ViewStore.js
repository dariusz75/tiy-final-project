var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var currentPage = 'Homepage';

var pages = [	'Homepage', 
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

function getCurrentPage() {
	return currentPage;
}

function setCurrentPage(page) {
	currentPage = page;
	ViewStore.emit('change');
}

var ViewStore = {
	getCurrentPage: getCurrentPage,
	addChangeListener: addChangeListener,
	removeChangeListener: removeChangeListener
};

function addChangeListener(handleChangeEvent) {
	ViewStore.on('change', handleChangeEvent);
}

function removeChangeListener(handleChangeEvent) {
	ViewStore.removeListener('change', handleChangeEvent);
}

ViewStore = objectAssign({}, ViewStore, EventEmitter.prototype);
console.log(ViewStore);

function handleAction(action) {
	console.log('working!');
	if (action.type === 'change_page_to_register_email_password_developer') {
		setCurrentPage('RegistrationEmailPasswordDeveloper');
	}
}



Dispatcher.register(handleAction);
module.exports = ViewStore;