var Dispatcher = require('../dispatcher/Dispatcher.js');
									
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

function changeToRegistrationSkillsDeveloper() {
	var action = {
		type: 'change_to_registration_skills_developer'
	};
	Dispatcher.dispatch(action);
}

function changeToAboutMeDeveloper() {
	var action = {
		type: 'change_to_about_me_developer'
	};
	Dispatcher.dispatch(action);
}

function changePageToYouHaveRegisteredMessageWhenClickCreateProfile() {
	var action = {
		type: 'change_page_to_you_have_registered_message_when_click_create_profile'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled,
	changePageToRegistrationSkillsDeveloperWhenNext: changePageToRegistrationSkillsDeveloperWhenNext,
	changeToRegistrationSkillsDeveloper: changeToRegistrationSkillsDeveloper,
	changeToAboutMeDeveloper: changeToAboutMeDeveloper,
	changePageToYouHaveRegisteredMessageWhenClickCreateProfile: changePageToYouHaveRegisteredMessageWhenClickCreateProfile
};