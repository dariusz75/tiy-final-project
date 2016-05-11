var React = require('react');
var Button = require('./button.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');


var YouHaveRegisteredMessage = React.createClass({
		
		render: function() {
			return <div className="row img-rounded registration-email-password-wrapper">
							<div className="homepage-info">
								<h1>You have been successfully registered and logged in.</h1>
								<h1>Enjoy our services!</h1>
							</div>	
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Go to the List of Talents" />
							<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Log out" />	
						 </div>;
		}
	});		

module.exports = YouHaveRegisteredMessage;