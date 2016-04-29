var React = require('react');
var Button = require('./button');

var RegistrationDetailsDeveloper = React.createClass({
	displayName: 'RegistrationDetailsDeveloper',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'row img-rounded registration-developer-wrapper' },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'PERSONAL DETAILS' })
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'SKILLS AND EXPERIENCE' })
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4' },
					React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'ABOUT ME' })
				)
			)
		);
	}
});

module.exports = RegistrationDetailsDeveloper;