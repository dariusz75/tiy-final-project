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

module.exports = {
	changePageToHomepage: changePageToHomepage,
	changePageToFindSection: changePageToFindSection,
	changePageToOurPartners: changePageToOurPartners
};