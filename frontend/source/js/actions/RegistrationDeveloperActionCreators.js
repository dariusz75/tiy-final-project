var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToHomepageWhenCancelled() {
	var action = {
		type: 'change_page_to_homepage_when_cancelled'
	};
	Dispatcher.dispatch(action);
}

function changePageToRegistrationDetailsDeveloperWhenNext() {
	var action = {
		type: 'change_page_to_registration_skills_developer_when_next'
	};
	Dispatcher.dispatch(action);
}

function changePageToRegistrationDetailsDeveloper() {
	var action = {
		type: 'change_page_to_registration_skills_developer'
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

function changePageToFindSectionWhenGoToListOfTalents() {
	var action = {
		type: 'change_page_to_find_section_when_go_to_list_of_talents'
	};
	Dispatcher.dispatch(action);
}

function changePageToYouHaveLoggedIn() {
	var action = {
		type: 'change_page_to_you_have_logged_in'
	};
	Dispatcher.dispatch(action);
}

function registerDeveloper(developer) {
	ApiServices.registerDeveloper(developer, function callback(error, data) {
		if (error) {
			console.log(error);
			return;
		} 
		var action = {
			type: 'set_authentication_token',
			token: data.token
		};
		Dispatcher.dispatch(action);
		changePageToYouHaveRegisteredMessageWhenClickCreateProfile();

	});
}

module.exports = {
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled,
	changePageToRegistrationDetailsDeveloperWhenNext: changePageToRegistrationDetailsDeveloperWhenNext,
	changePageToRegistrationDetailsDeveloper: changePageToRegistrationDetailsDeveloper,
	changeToRegistrationSkillsDeveloper: changeToRegistrationSkillsDeveloper,
	changeToAboutMeDeveloper: changeToAboutMeDeveloper,
	changePageToYouHaveRegisteredMessageWhenClickCreateProfile: changePageToYouHaveRegisteredMessageWhenClickCreateProfile,
	changePageToFindSectionWhenGoToListOfTalents: changePageToFindSectionWhenGoToListOfTalents,
	changePageToYouHaveLoggedIn: changePageToYouHaveLoggedIn,
	registerDeveloper: registerDeveloper
};