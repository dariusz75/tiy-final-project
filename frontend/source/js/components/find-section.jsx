var React = require('react');
var Checkboxes = require('./check-box.jsx');
var Miniprofiles = require('./miniprofile.jsx');


var FindSection = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-email-password-wrapper">
						 	<Checkboxes />
						 	<Miniprofiles />
						 </div>;
		}
	});		

module.exports = FindSection;