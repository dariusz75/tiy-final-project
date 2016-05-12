var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');
var HomepageActionCreators = require('../actions/HomepageActionCreators.js');


var Homepage = React.createClass({
		handleRegisterAsADeveloperClick: function () {
				HomepageActionCreators.changePageToRegisterEmailPasswordDeveloper();
		},
		handleRegisterAsAnEmployerClick: function () {
			HomepageActionCreators.changePageToRegisterEmailPasswordEmployer();
		},
		render: function() {
			return 	<div>
								<TopBar />
								<div className="row img-rounded general-wrapper">
									<div className="homepage-info">
										<h1>Our Hiring Partners</h1>
										<p>To be updated soon...</p>
									</div>	
								</div>
							</div>;
		}
	});		

module.exports = Homepage;