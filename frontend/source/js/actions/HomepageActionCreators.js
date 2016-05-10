var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToRegisterEmailPasswordDeveloper() {
	var action = {
		type: 'change_page_to_register_email_password_developer'
	};
	Dispatcher.dispatch(action);
}

function changePageToRegisterEmailPasswordEmployer() {
	var action = {
		type: 'change_page_to_register_email_password_employer'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToRegisterEmailPasswordDeveloper: changePageToRegisterEmailPasswordDeveloper,
	changePageToRegisterEmailPasswordEmployer: changePageToRegisterEmailPasswordEmployer
};