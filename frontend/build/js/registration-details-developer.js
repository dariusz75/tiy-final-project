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
																																										'First name:'
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
																												),
																												React.createElement(
																																			'div',
																																			{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
																																			React.createElement(
																																										'label',
																																										{ 'for': 'usr' },
																																										'Surname:'
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
																												),
																												React.createElement(
																																			'div',
																																			{ className: 'form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
																																			React.createElement(
																																										'label',
																																										{ 'for': 'usr' },
																																										'Job title:'
																																			),
																																			React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
																												),
																												React.createElement(
																																			'div',
																																			{ className: 'form-group col-xs-12 col-sm-offset-6 col-sm-offset-6 col-sm-offset-6 col-sm-offset-6' },
																																			React.createElement(
																																										'label',
																																										{ 'for': 'usr' },
																																										'   '
																																			),
																																			React.createElement('input', { type: 'text', className: 'form-control', id: 'usr' })
																												),
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
																					)
														);
							}
});

module.exports = RegistrationDetailsDeveloper;