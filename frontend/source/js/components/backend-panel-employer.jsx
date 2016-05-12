var React = require('react');
var Button = require('./button.jsx');

var BackendPanelEmployer = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">													
							<p className="bold">My bookmarked candidates</p>
							<div id="candidate-link" className="img-rounded col-xs-10 col-sm-10 col-md-10 col-lg-10">
								<p>Name</p> <p>Job Title</p>
							</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<Button addClass="blue-dark fullwidth no-border  hvr-pulse-grow" text="DELETE" />	
							</div>
	  					<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
	  						<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow " text="BACK TO LIST OF TALENTS" />
	  					</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="DELETE ALL" />
							</div>			
						 </div>;
		}
	});		

module.exports = BackendPanelEmployer;