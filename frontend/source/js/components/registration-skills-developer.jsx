var React = require('react');
var Button = require('./button.jsx');
var Checkboxes = require('./check-box.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');
var TopBar = require('./top-bar.jsx');


var skillsOptions = {
	skillsData:[
	{
		value: 'html',
		title: 'HTML'
	}, 
	{
		value: 'css',
		title: 'CSS'
	},
	{
		value: 'less',
		title: 'LESS'
	},
	{
		value: 'sass',
		title: 'SASS'
	},
	{
		value: 'javascript',
		title: 'Javascript'
	},
	{
		value: 'jquery',
		title: 'jQuery'
	},
	{
		value: 'reactjs',
		title: 'ReactJS'
	},
	{
		value: 'nodejs',
		title: 'NodeJS'
	},
	]
};

var RegistrationSkillsDeveloper = React.createClass({

	getInitialState: function () {
		return {
			html: false,
			css: false,
			less: false,
			sass: false,
			javascript: false,
			jquery: false,
			reactjs: false,
			nodejs: false
		};
	},

	handleCheckboxChange: function (skillName) {
		var updatedState = {};
		updatedState[skillName] = ! this.state[skillName];
		this.setState(updatedState);
	},

		handlePersonalDetailsDeveloperClick: function () {
			RegistrationDeveloperActionCreators.changePageToRegistrationDetailsDeveloper();
		},

		handleAboutMeDeveloperClick: function () {
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
			  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" onClick={this.handlePersonalDetailsDeveloperClick} />
			  						</div>
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			  							<Button addClass="active-link fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS" />
			  						</div>
			  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
			  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" onClick={this.handleAboutMeDeveloperClick} />
			  						</div>
									</div>
									<div className="row">
										<Checkboxes handleCheckboxChange={this.handleCheckboxChange} skillsData={skillsOptions.skillsData} skillsChecked={this.state} />
										<div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
											<label className="margin-top" for="basic-url">Your LinkedIn URL</label>
											<div className="input-group">
		  									<span className="input-group-addon" id="basic-addon3"></span>
		  									<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
											</div>
											<label className="margin-top" for="basic-url">Your LinkedIn URL</label>
											<div className="input-group">
		  									<span className="input-group-addon" id="basic-addon3"></span>
		  									<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
											</div>
											<label className="margin-top" for="basic-url">Your LinkedIn URL</label>
											<div className="input-group">
		  									<span className="input-group-addon" id="basic-addon3"></span>
		  									<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
											</div>
										</div>
									</div>
										<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CREATE PROFILE" onClick={this.handleCreateProfileClick} />
								 		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />			
								 	</div>
								</div>;
		}
	});		

module.exports = RegistrationSkillsDeveloper;
				 