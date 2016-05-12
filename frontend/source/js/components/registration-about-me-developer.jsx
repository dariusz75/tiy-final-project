var React = require('react');
var Button = require('./button.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');


var RegistrationAboutMeDeveloper = React.createClass({

		handlePersonalDetailsDeveloperClick: function () {
			RegistrationDeveloperActionCreators.changePageToRegistrationDetailsDeveloper();
		},

		handleSkillsAndExperienceClick: function () {
				RegistrationDeveloperActionCreators.changeToRegistrationSkillsDeveloper();
		},

		handleCreateProfileClick: function () {
				RegistrationDeveloperActionCreators.changePageToYouHaveRegisteredMessageWhenClickCreateProfile();
		},

		handleCancelDeveloperClick: function () {
				RegistrationDeveloperActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">
							<div className="row">
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" onClick={this.handlePersonalDetailsDeveloperClick} />
	  						</div>
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS AND EXPERIENCE" onClick={this.handleSkillsAndExperienceClick} />
	  						</div>
	  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="active-link fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" />
	  						</div>
							</div>
								<div class="form-group">
									<label className="margin-top" for="form-control">Few sentences about yourself </label>
    							<textarea className="form-control" placeholder="Max 300 characters"></textarea>
								</div>
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CREATE PROFILE" onClick={this.handleCreateProfileClick} />
						 		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />			
						 </div>;
		}
	});		

module.exports = RegistrationAboutMeDeveloper;