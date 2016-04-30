var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');
var Checkboxes = require('./check-box');
var Miniprofile = require('./miniprofile');
var RegistrationEmailPasswordDeveloper = require('./registration-email-password-developer');
var RegistrationEmailPasswordEmployer = require('./registration-email-password-employer');
var RegistrationDetailsDeveloper = require('./registration-details-developer');
var RegistrationSkillsDeveloper = require('./registration-skills-developer');
var RegistrationAboutMeDeveloper = require('./registration-about-me-developer');

var parentElement = document.querySelector('.target');
var element = React.createElement(Button);

var candidatesDetails = {
	candidatesData: [
	{
		id: '01',
		firstName: 'John',
		surname: 'Smith',
		jobTitle: 'Frontend Developer',
		photoSrc: 'images/photo1.jpg'
	},
	{
		id: '02',
		firstName: 'Michael',
		surname: 'Jordan',
		jobTitle: 'Backend Developer',
		photoSrc: 'images/photo2.jpg'
	},	
	{
		id: '03',
		firstName: 'Rob',
		surname: 'Johnson',
		jobTitle: 'UI Designer',
		photoSrc: 'images/photo3.jpg'
	}
	]
};

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
		title: 'node.JS'
	},
	]
}

	var FinalComponent = React.createClass({
		render: function() {
		return <div>
			  		<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Register as a Developer" />	
			  		<RegistrationEmailPasswordDeveloper />
			  		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Register as an Employer" />
			  		<RegistrationDetailsDeveloper />
			  		<RegistrationSkillsDeveloper />
			  		<RegistrationAboutMeDeveloper />
			  		<RegistrationEmailPasswordEmployer />
			  		<Checkboxes skillsData={skillsOptions.skillsData} />
			  		<Miniprofile candidatesData={candidatesDetails.candidatesData}/>
			  	 </div>	;	  
	}
});



ReactDOM.render(<FinalComponent />, parentElement);