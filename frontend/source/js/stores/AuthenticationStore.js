var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var authenticationToken = null;

function getCurrentPage() {
	return currentPage;
}


function handleAction(action) {

}


Dispatcher.register(handleAction);
module.exports = AuthenticationStore;