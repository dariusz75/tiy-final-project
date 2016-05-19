var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');

var BackendPanelEmployer = React.createClass({
		render: function() {
			return <div>
							<TopBar />
							<div className="img-rounded general-wrapper">	
								<div className="row">												
									<p className="bold">My bookmarked candidates</p>
									<div id="candidate-link" className="img-rounded button-text-style col-xs-8 col-sm-8 col-md-8 col-lg-8">
										<p>Name</p> <p>Job Title</p>
									</div>
									<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
										<Button addClass="blue-dark fullwidth no-border button-text-style  hvr-pulse-grow" text="PROFILE" />	
									</div>
									<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
										<Button addClass="blue-dark fullwidth no-border button-text-style  hvr-pulse-grow" text="DELETE" />	
									</div>
								</div>
								<div className="row">
			  					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
			  						<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow " text="BACK TO LIST OF TALENTS" />
			  					</div>
									<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
										<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="DELETE ALL" />
									</div>			
								</div>
							</div>
						 </div>;
		}
	});		

module.exports = BackendPanelEmployer;