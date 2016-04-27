var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');
var Checkbox = require('./check-box');

var parentElement = document.querySelector('.target');
var element = React.createElement(Button);

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
			  		<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="Register as a Developer" />
			  		<Button addClass="blue-dark fullwidth no-border button-text-style hvr-pulse-grow" text="Register as an Employer" />	
			  		<Checkbox skillsData={skillsOptions.skillsData}/>
			  	 </div>		  
	}
});



ReactDOM.render(<FinalComponent />, parentElement);