var React = require('react');
var Button = require('./button.jsx');
var RegistrationEmployerActionCreators = require('../actions/RegistrationEmployerActionCreators.js');
var TopBar = require('./top-bar.jsx');


var RegistrationEmailPasswordEmployer = React.createClass({
		handleDoneEmployerClick: function () {
				RegistrationEmployerActionCreators.changePageToYouHaveRegisteredMessageWhenDone();
		},

		handleCancelEmployerClick: function () {
				RegistrationEmployerActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return 	<div>
								<TopBar />
								<div className="row img-rounded general-wrapper">
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
									<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="DONE" onClick={this.handleDoneEmployerClick} />
							 		<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelEmployerClick} />
							 	</div>
							</div>;
		}
	});		

module.exports = RegistrationEmailPasswordEmployer;