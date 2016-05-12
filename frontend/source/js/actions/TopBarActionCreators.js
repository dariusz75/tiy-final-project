var Dispatcher = require('../dispatcher/Dispatcher.js');
									
function changePageToHomepage() {
	var action = {
		type: 'change_page_to_homepage'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
	changePageToHomepage: changePageToHomepage
};