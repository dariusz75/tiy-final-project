var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');
var Checkbox = require('./check-box');

var parentElement = document.querySelector('.target');
var element = React.createElement(Button);

var skillsOptions = {
	skillsData: [{
		value: 'html',
		title: 'HTML'
	}, {
		value: 'css',
		title: 'CSS'
	}, {
		value: 'less',
		title: 'LESS'
	}, {
		value: 'sass',
		title: 'SASS'
	}, {
		value: 'javascript',
		title: 'Javascript'
	}, {
		value: 'jquery',
		title: 'jQuery'
	}, {
		value: 'reactjs',
		title: 'ReactJS'
	}, {
		value: 'nodejs',
		title: 'node.JS'
	}]
};

var FinalComponent = React.createClass({
	displayName: 'FinalComponent',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'Register as a Developer' }),
			React.createElement(Button, { addClass: 'blue-dark fullwidth no-border button-text-style hvr-pulse-grow', text: 'Register as an Employer' }),
			React.createElement(Checkbox, { skillsData: skillsOptions.skillsData })
		);
	}
});

ReactDOM.render(React.createElement(FinalComponent, null), parentElement);