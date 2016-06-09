var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var authenticationToken = null;

function getAuthenticationToken() {
	return authenticationToken;
}

function setAuthenticationToken(token) {
	authenticationToken = token; 
	AuthenticationStore.emit('change');
}

function addChangeListener(handleChangeEvent) {
	AuthenticationStore.on('change', handleChangeEvent);
}

function removeChangeListener(handleChangeEvent) {
	AuthenticationStore.removeListener('change', handleChangeEvent);
}

var AuthenticationStore = {
	getAuthenticationToken: getAuthenticationToken,
	addChangeListener: addChangeListener,
	removeChangeListener: removeChangeListener
};

AuthenticationStore = objectAssign({}, AuthenticationStore, EventEmitter.prototype);

function handleAction(action) {
	if (action.type === 'set_authentication_token') {
		setAuthenticationToken(action.token);
	}
}

Dispatcher.register(handleAction);
module.exports = AuthenticationStore;