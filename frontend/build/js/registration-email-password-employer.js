var React = require('react');
var Button = require('./button');

var RegistrationEmailPasswordEmployer = React.createClass({
	displayName: 'RegistrationEmailPasswordEmployer',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'row img-rounded registration-email-password-wrapper' },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
					React.createElement(
						'label',
						{ 'for': 'usr' },
						'Enter email address:'
					),
					React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
				),
				React.createElement(
					'div',
					{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
					React.createElement(
						'label',
						{ 'for': 'usr' },
						'Confirm email address:'
					),
					React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
				)
			),
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
					React.createElement(
						'label',
						{ 'for': 'usr' },
						'Enter password:'
					),
					React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
				),
				React.createElement(
					'div',
					{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
					React.createElement(
						'label',
						{ 'for': 'usr' },
						'Confirm password:'
					),
					React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
				)
			),
			React.createElement(Button, { addClass: 'blue-dark fullwidth no-border button-text-style hvr-pulse-grow', text: 'DONE' }),
			React.createElement(Button, { addClass: 'blue-dark fullwidth no-border button-text-style hvr-pulse-grow', text: 'CANCEL' })
		);
	}
});

module.exports = RegistrationEmailPasswordEmployer;