var React = require('react');
var Button = require('./button');

var Miniprofile = React.createClass({
	displayName: 'Miniprofile',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					this.props.firstName,
					' ',
					this.props.surname
				),
				React.createElement(
					'p',
					null,
					this.props.jobTitle
				)
			),
			React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'See full profile' })
		);
	}
});

var ListOfMiniprofiles = React.createClass({
	displayName: 'ListOfMiniprofiles',

	render: function () {
		var list = this.props.candidatesData.map(function (candidate) {
			return React.createElement(Miniprofile, { firstName: candidate.firstName, surname: candidate.surname, jobTitle: candidate.jobTitle, key: candidate.id });
		});
		return React.createElement(
			'div',
			{ className: 'list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3' },
			list
		);
	}
});

module.exports = ListOfMiniprofiles;