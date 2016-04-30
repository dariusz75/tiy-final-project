var React = require('react');
var Button = require('./button');
var Checkboxes = require('./check-box');



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

var RegistrationSkillsDeveloper = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">
							<div className="row">
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="PERSONAL DETAILS" />
	  						</div>
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="SKILLS AND EXPERIENCE" />
	  						</div>
	  						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	  							<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="ABOUT ME" />
	  						</div>
							</div>
							<div className="row">
								<Checkboxes skillsData={skillsOptions.skillsData} />
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
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CREATE PROFILE" />
						 		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" />			
						 </div>;
		}
	});		

module.exports = RegistrationSkillsDeveloper;