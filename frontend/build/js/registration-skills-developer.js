var React = require('react');
var Button = require('./button');
var Checkboxes = require('./check-box');

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

var RegistrationSkillsDeveloper = React.createClass({
	displayName: 'RegistrationSkillsDeveloper',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'row img-rounded registration-developer-wrapper' },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'PERSONAL DETAILS' })
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'SKILLS AND EXPERIENCE' })
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'ABOUT ME' })
				)
			),
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(Checkboxes, { skillsData: skillsOptions.skillsData }),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-9 col-md-9 col-lg-9' },
					React.createElement(
						'label',
						{ className: 'margin-top', 'for': 'basic-url' },
						'Your LinkedIn URL'
					),
					React.createElement(
						'div',
						{ className: 'input-group' },
						React.createElement('span', { className: 'input-group-addon', id: 'basic-addon3' }),
						React.createElement('input', { type: 'text', className: 'form-control', id: 'basic-url', 'aria-describedby': 'basic-addon3' })
					),
					React.createElement(
						'label',
						{ className: 'margin-top', 'for': 'basic-url' },
						'Your LinkedIn URL'
					),
					React.createElement(
						'div',
						{ className: 'input-group' },
						React.createElement('span', { className: 'input-group-addon', id: 'basic-addon3' }),
						React.createElement('input', { type: 'text', className: 'form-control', id: 'basic-url', 'aria-describedby': 'basic-addon3' })
					),
					React.createElement(
						'label',
						{ className: 'margin-top', 'for': 'basic-url' },
						'Your LinkedIn URL'
					),
					React.createElement(
						'div',
						{ className: 'input-group' },
						React.createElement('span', { className: 'input-group-addon', id: 'basic-addon3' }),
						React.createElement('input', { type: 'text', className: 'form-control', id: 'basic-url', 'aria-describedby': 'basic-addon3' })
					)
				)
			),
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'CREATE PROFILE' }),
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'CANCEL' })
		);
	}
});

module.exports = RegistrationSkillsDeveloper;