var React = require('react');
var Button = require('./button.jsx');
var TopBarLoggedIn = require('./top-bar.jsx');
var HomepageActionCreators = require('../actions/HomepageActionCreators.js');


var HomepageLoggedIn = React.createClass({
		handleRegisterAsADeveloperClick: function () {
				HomepageActionCreators.changePageToRegisterEmailPasswordDeveloper();
		},
		handleRegisterAsAnEmployerClick: function () {
			HomepageActionCreators.changePageToRegisterEmailPasswordEmployer();
		},
		render: function() {
			return <div>
							<TopBarLogOut />
							<div className="row img-rounded general-wrapper">
								<div className="homepage-info">
									<h1>Our Mission</h1>
									<p>Welcome to London Software Juniors! <br /> 
										Our mission is to provide a job saerch service where London based Junior Developers and gratuates
										can advertise and share their skills so potential employers can hire them directly.
									</p>
								</div>	
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Register as a Developer" onClick={this.handleRegisterAsADeveloperClick} />
								<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Register as an Employer" onClick={this.handleRegisterAsAnEmployerClick} />	
							</div>
						</div>;
		}
	});		

module.exports = HomepageLoggedIn;