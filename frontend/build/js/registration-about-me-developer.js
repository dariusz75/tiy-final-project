var React = require('react');
var Button = require('./button');

var RegistrationAboutMeDeveloper = React.createClass({
	displayName: 'RegistrationAboutMeDeveloper',

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
				{ 'class': 'form-group' },
				React.createElement(
					'label',
					{ className: 'margin-top', 'for': 'form-control' },
					'Few sentences about yourself '
				),
				React.createElement('textarea', { className: 'form-control', placeholder: 'Max 300 characters' })
			),
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'CREATE PROFILE' }),
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'CANCEL' })
		);
	}
});

module.exports = RegistrationAboutMeDeveloper;