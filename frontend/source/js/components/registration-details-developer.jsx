var React = require('react');
var Button = require('./button.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');
var TopBar = require('./top-bar.jsx');


var RegistrationDetailsDeveloper = React.createClass({

		handleSkillsAndExperienceClick: function () {
				RegistrationDeveloperActionCreators.changeToRegistrationSkillsDeveloper();
		},

		handleAboutMeClick: function () {
				RegistrationDeveloperActionCreators.changeToAboutMeDeveloper();
		},

		handleCreateProfileClick: function () {
				RegistrationDeveloperActionCreators.changePageToYouHaveRegisteredMessageWhenClickCreateProfile();
		},

		handleCancelDeveloperClick: function () {
				RegistrationDeveloperActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return 	<div>
								<TopBar />
								<div className="row img-rounded general-wrapper">
									<div className="row">
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			  							<Button addClass="active-link fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" />
			  						</div>
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS" onClick={this.handleSkillsAndExperienceClick} />
			  						</div>
			  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" onClick={this.handleAboutMeClick} />
			  						</div>
									</div>
									<div className="row">
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  							<label for="usr">First name</label>
			  							<input type="text" className="form-control" id="usr"></input>
										</div>
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  							<label for="usr">Surname</label>
			  							<input type="text" className="form-control" id="usr"></input>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  							<label for="usr">Job Title</label>
			  							<input type="text" className="form-control" id="usr"></input>
										</div>
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  							<label for="usr">Contact number</label>
			  							<input type="text" className="form-control" id="usr"></input>
										</div>	
									</div>
									<div className="row">
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			          			<label for="usr">Upload your CV</label>
			          			<span className="file-input btn btn-block btn-primary btn-file">
			              	Browse&hellip; <input type="file" multiple></input>
			          			</span>
			      				</div>
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
			          			<label for="usr">Upload your Photo</label>
			          			<span className="file-input btn btn-block btn-primary btn-file">
			              	Browse&hellip; <input type="file" multiple></input>
			          			</span>
			      				</div>
									</div>
										<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CREATE PROFILE" onClick={this.handleCreateProfileClick} />
								 		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />			
								</div>
							</div>;
		}
	});		

module.exports = RegistrationDetailsDeveloper;