var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToHomepage() {
	var action = {
		type: 'change_page_to_homepage'
	};
	Dispatcher.dispatch(action);
}

function changePageToFindSection() {
	var action = {
		type: 'change_page_to_find_section'
	};
	Dispatcher.dispatch(action);
}

function changePageToOurPartners() {
	var action = {
		type: 'change_page_to_our_partners'
	};
	Dispatcher.dispatch(action);
}

function changePageToContact() {
	var action = {
		type: 'change_page_to_contact'
	};
	Dispatcher.dispatch(action);
}

function changePageToLogIn() {
	var action = {
		type: 'change_page_to_log_in'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToHomepage: changePageToHomepage,
	changePageToFindSection: changePageToFindSection,
	changePageToOurPartners: changePageToOurPartners,
	changePageToContact: changePageToContact,
	changePageToLogIn: changePageToLogIn
};