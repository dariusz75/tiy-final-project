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
									<p>Consectetur adipisicing elit. Id ut fuga reprehenderit inventore laudantium obcaecati earum rerum, dolore dolor. Cum neque illum culpa, animi? Reiciendis explicabo repudiandae unde quasi eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore sunt blanditiis voluptas, accusamus, commodi repellat doloribus nostrum officiis fugit non iste beatae, culpa unde sapiente eligendi, maiores odit eum.</p>
								</div>	
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Register as a Developer" onClick={this.handleRegisterAsADeveloperClick} />
								<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Register as an Employer" onClick={this.handleRegisterAsAnEmployerClick} />	
							</div>
						</div>;
		}
	});		

module.exports = HomepageLoggedIn;