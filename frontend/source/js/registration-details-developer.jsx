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
						 </div>;
		}
	});		

module.exports = RegistrationDetailsDeveloper;