var React = require('react');
var Button = require('./button.jsx');


var LogIn = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-email-password-wrapper">
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
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="DONE" />
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" />	
						 </div>;
		}
	});		

module.exports = LogIn;