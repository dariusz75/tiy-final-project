var React = require('react');
var Checkboxes = require('./check-box.jsx');
var Miniprofiles = require('./miniprofile.jsx');
var TopBar = require('./top-bar.jsx');


var FindSection = React.createClass({
		render: function() {
			return 	<div>
								<TopBar />
								<div className="row img-rounded general-wrapper">
								 	<Checkboxes />
								 	<Miniprofiles />
						 		</div>
						 	</div>;
		}
	});		

module.exports = FindSection;