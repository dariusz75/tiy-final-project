var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToFullProfileDeveloper() {
	var action = {
		type: 'change_page_to_full_profile_developer'
	};
	Dispatcher.dispatch(action);
}

function changePageToBackendPanelEmployer() {
	var action = {
		type: 'change_page_to_backend_panel_employer'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToFullProfileDeveloper: changePageToFullProfileDeveloper,
	changePageToBackendPanelEmployer: changePageToBackendPanelEmployer
};