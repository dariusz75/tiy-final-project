var React = require('react');
var Button = require('./button.jsx');
var candidatesDetails = require('../stores/MiniProfilesStore.js');


var Miniprofile = React.createClass({
		render: function() {
			return <div className="miniprofile-wrapper row img-rounded ">
							<div className="row">
    						<div className="col-xs-12 col-sm-8 col-md-8 col-lg-8"><p>{this.props.firstName} {this.props.surname}</p><p>{this.props.jobTitle}</p></div>
  					  	<img className=" profile-photo col-xs-12 col-sm-4 col-md-4 col-lg-4 img-responsive" src={this.props.imageSource} />
  					  </div>
  					  <div className="row">
  					  	<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="See full profile" />
  					 	</div>
  					 </div>;	
		}
	});


var ListOfMiniprofiles = React.createClass({
		render: function() {
			var list = candidatesDetails.candidatesData.map(function(candidate){
				return <Miniprofile imageSource={candidate.photoSrc} firstName={candidate.firstName} surname={candidate.surname} jobTitle={candidate.jobTitle} key={candidate.id} />
			});
			return 	<div className="img-rounded col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
							{list}
							</div>;
		}
	});

module.exports = ListOfMiniprofiles;