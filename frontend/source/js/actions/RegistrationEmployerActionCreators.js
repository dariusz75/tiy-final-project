var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToYouHaveRegisteredMessageWhenDone() {
	var action = {
		type: 'change_page_to_you_have_registered_message_when_click_create_profile'
	};
	Dispatcher.dispatch(action);
}

function changePageToHomepageWhenCancelled() {
	var action = {
		type: 'change_page_to_homepage_when_cancelled'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToYouHaveRegisteredMessageWhenDone: changePageToYouHaveRegisteredMessageWhenDone,
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled
};