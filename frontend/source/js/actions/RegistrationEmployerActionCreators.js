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

module.exports = {
	changePageToHomepageWhenDone: changePageToHomepageWhenDone,
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled
};