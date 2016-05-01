var React = require('react');
var Button = require('./button');

var BackendPanelEmployer = React.createClass({
	displayName: 'BackendPanelEmployer',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'row img-rounded registration-developer-wrapper' },
			React.createElement(
				'p',
				{ className: 'bold' },
				'My bookmarked candidates'
			),
			React.createElement(
				'div',
				{ id: 'candidate-link', className: 'img-rounded col-xs-10 col-sm-10 col-md-10 col-lg-10' },
				React.createElement(
					'p',
					null,
					'Name'
				),
				' ',
				React.createElement(
					'p',
					null,
					'Job Title'
				)
			),
			React.createElement(
				'div',
				{ className: 'col-xs-2 col-sm-2 col-md-2 col-lg-2' },
				React.createElement(Button, { addClass: 'blue-dark fullwidth no-border  hvr-pulse-grow', text: 'DELETE' })
			),
			React.createElement(
				'div',
				{ className: 'col-xs-10 col-sm-10 col-md-10 col-lg-10' },
				React.createElement(Button, { addClass: 'blue-dark fullwidth no-border button-text-style hvr-pulse-grow ', text: 'BACK TO LIST OF TALENTS' })
			),
			React.createElement(
				'div',
				{ className: 'col-xs-2 col-sm-2 col-md-2 col-lg-2' },
				React.createElement(Button, { addClass: 'blue-dark fullwidth no-border button-text-style hvr-pulse-grow', text: 'DELETE ALL' })
			)
		);
	}
});

module.exports = BackendPanelEmployer;