var React = require('react');
var Button = require('./button');

var Miniprofile = React.createClass({
		render: function() {
			return <div>
    					<div><p>{this.props.firstName} {this.props.surname}</p><p>{this.props.jobTitle}</p></div>
  					  <Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="See full profile" />
  					 </div>;	
		}
	});


var ListOfMiniprofiles = React.createClass({
		render: function() {
			var list = this.props.candidatesData.map(function(candidate){
				return <Miniprofile firstName={candidate.firstName} surname={candidate.surname} jobTitle={candidate.jobTitle} key={candidate.id} />
			});
			return 	<div className="list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3">
							{list}
							</div>;
		}
	});

module.exports = ListOfMiniprofiles;