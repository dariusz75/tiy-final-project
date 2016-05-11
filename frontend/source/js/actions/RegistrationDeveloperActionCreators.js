var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToHomepageWhenDone() {
	var action = {
		type: 'change_page_to_homepage_when_done'
	};
	Dispatcher.dispatch(action);
}

function changePageToHomepageWhenCancelled() {
	var action = {
		type: 'change_page_to_homepage_when_cancelled'
	};
	Dispatcher.dispatch(action);
}

function changePageToRegistrationSkillsDeveloperWhenNext() {
	var action = {
		type: 'change_page_to_registration_skills_developer_when_next'
	};
	Dispatcher.dispatch(action);
}

function changePageToBackendPanelDeveloperWhenCreateProfile() {
	var action = {
		type: 'change_page_to_backend_panel_developer_when_create_profile'
	};
	Dispatcher.dispatch(action);
}

function changeToRegistrationSkillsDeveloper() {
	var action = {
		type: 'change_to_registration_skills_developer'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToHomepageWhenDone: changePageToHomepageWhenDone,
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled,
	changePageToRegistrationSkillsDeveloperWhenNext: changePageToRegistrationSkillsDeveloperWhenNext,
	changePageToBackendPanelDeveloperWhenCreateProfile: changePageToBackendPanelDeveloperWhenCreateProfile,
	changeToRegistrationSkillsDeveloper: changeToRegistrationSkillsDeveloper
};