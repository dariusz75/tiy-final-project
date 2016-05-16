var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');


var LogIn = React.createClass({

		handleLogInDeveloperClick: function () {
			RegistrationDeveloperActionCreators.changePageToYouHaveLoggedIn();
		},

		handleCancelDeveloperClick: function () {
				RegistrationDeveloperActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return <div>
							<TopBar /> 
							<div className="row img-rounded general-wrapper">
								<div className="row">
									<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
		  							<label for="usr">Enter email address:</label>
		  							<input type="text" className="form-control" id="usr"></input>
									</div>
									<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
		  							<label for="usr">Enter password:</label>
		  							<input type="text" className="form-control" id="usr"></input>
									</div>
								</div>
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="LOG IN" onClick={this.handleLogInDeveloperClick} />
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />	
							</div>
						</div>;
		}
	});		

module.exports = LogIn;

