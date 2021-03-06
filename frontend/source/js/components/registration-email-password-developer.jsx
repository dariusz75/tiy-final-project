var React = require('react');
var Button = require('./button.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');


var RegistrationEmailPasswordDeveloper = React.createClass({
	
		handleNextDeveloperClick: function () {
					RegistrationDeveloperActionCreators.changePageToRegistrationDetailsDeveloperWhenNext();
		},

		handleCancelDeveloperClick: function () {
				RegistrationDeveloperActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return <div className="row img-rounded registration-email-password-wrapper">
							<div className="row">
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Enter email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Confirm email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
							</div>
							<div className="row">
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Enter password:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Confirm password:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
							</div>	
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="NEXT" onClick={this.handleNextDeveloperClick} />
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />	
						 </div>;
		}
	});		

module.exports = RegistrationEmailPasswordDeveloper;