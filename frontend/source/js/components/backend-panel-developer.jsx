var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');

var BackendPanelDeveloper = React.createClass({
		render: function() {
			return <div>
							<TopBar />
							<div className="row img-rounded general-wrapper">
								<div className="row">
									<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
		  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" />
		  						</div>
									<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
		  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS AND EXPERIENCE" />
		  						</div>
		  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
		  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" />
		  						</div>
								</div>
									<div class="form-group">
										<label className="margin-top" for="form-control">Few sentences about yourself </label>
	    							<textarea className="form-control" placeholder="Max 300 characters"></textarea>
									</div>
									<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SAVE" />
							 		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" />			
							</div>
						</div>;
		}
	});		

module.exports = BackendPanelDeveloper;