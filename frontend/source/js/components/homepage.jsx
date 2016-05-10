var React = require('react');
var Button = require('./button.jsx');
var HomepageActionCreators = require('../actions/HomepageActionCreators.js');


var Homepage = React.createClass({
		handleRegisterAsADeveloperClick: function () {
				HomepageActionCreators.changePageToRegisterEmailPasswordDeveloper();
		},

		render: function() {
			return <div className="row img-rounded registration-email-password-wrapper">
							<div className="homepage-info">
								<h1>Our Mission</h1>
								<p>Consectetur adipisicing elit. Id ut fuga reprehenderit inventore laudantium obcaecati earum rerum, dolore dolor. Cum neque illum culpa, animi? Reiciendis explicabo repudiandae unde quasi eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore sunt blanditiis voluptas, accusamus, commodi repellat doloribus nostrum officiis fugit non iste beatae, culpa unde sapiente eligendi, maiores odit eum.</p>
							</div>	
							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Register as a Developer" onClick={this.handleRegisterAsADeveloperClick}/>
							<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Register as an Employer" />	
						 </div>;
		}
	});		

module.exports = Homepage;