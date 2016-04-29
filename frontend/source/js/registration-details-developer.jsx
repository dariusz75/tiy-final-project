var React = require('react');
var Button = require('./button');

var RegistrationDetailsDeveloper = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">
							<div className="row">
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" />
	  						</div>
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS AND EXPERIENCE" />
	  						</div>
	  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" />
	  						</div>
							</div>
							<div className="row">
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">First name:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Confirm email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Surname:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Confirm email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Job title:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-offset-6 col-sm-offset-6 col-sm-offset-6 col-sm-offset-6">
	  							<label for="usr">   </label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Enter email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
								<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
	  							<label for="usr">Confirm email address:</label>
	  							<input type="text" className="form-control" id="usr"></input>
								</div>
							</div>				
						 </div>;
		}
	});		

module.exports = RegistrationDetailsDeveloper;