var React = require('react');
var Button = require('./button');

var Miniprofile = React.createClass({
	displayName: 'Miniprofile',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'miniprofile-wrapper row img-rounded ' },
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xlg-8' },
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
				React.createElement('img', { className: ' profile-photo col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xlg-4 img-responsive', src: this.props.imageSource })
			),
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow', text: 'See full profile' })
			)
		);
	}
});

var ListOfMiniprofiles = React.createClass({
	displayName: 'ListOfMiniprofiles',

	render: function () {
		var list = this.props.candidatesData.map(function (candidate) {
			return React.createElement(Miniprofile, { imageSource: candidate.photoSrc, firstName: candidate.firstName, surname: candidate.surname, jobTitle: candidate.jobTitle, key: candidate.id });
		});
		return React.createElement(
			'div',
			{ className: 'img-rounded col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6' },
			list
		);
	}
});

module.exports = ListOfMiniprofiles;