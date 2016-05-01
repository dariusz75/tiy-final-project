var React = require('react');
var Button = require('./button');

var FullProfileDeveloper = React.createClass({
	displayName: 'FullProfileDeveloper',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'row img-rounded registration-developer-wrapper' },
			React.createElement(
				'p',
				{ className: 'bold text-center' },
				'CANDIDATE\'S PROFILE'
			),
			React.createElement(
				'div',
				{ className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4' },
				React.createElement(
					'div',
					{ className: 'basic-details-wrapper img-rounded' },
					React.createElement(
						'p',
						null,
						'John Smith'
					),
					React.createElement(
						'p',
						null,
						'Frontend Developer'
					),
					React.createElement(
						'p',
						null,
						'john@hotmail.com'
					),
					React.createElement(
						'p',
						null,
						'07708473329'
					)
				),
				React.createElement(
					'div',
					{ className: 'full-profile-skills-list img-rounded ' },
					React.createElement(
						'p',
						null,
						'Skills:'
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							'HTML'
						),
						React.createElement(
							'li',
							null,
							'CSS'
						),
						React.createElement(
							'li',
							null,
							'Javascript'
						),
						React.createElement(
							'li',
							null,
							'jQuery'
						),
						React.createElement(
							'li',
							null,
							'Node.js'
						),
						React.createElement(
							'li',
							null,
							'Git'
						),
						React.createElement(
							'li',
							null,
							'Github'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'border img-rounded righthand-side-wrapper col-xs-12 col-sm-8 col-md-8 col-lg-8' },
				React.createElement(
					'div',
					{ className: 'border col-xs-12 col-sm-6 col-md-6 col-lg-6' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							{ className: 'img-rounded' },
							React.createElement(
								'a',
								{ href: '#', target: '_blank' },
								React.createElement('i', { className: 'fa fa-linkedin-square', 'aria-hidden': 'true' }),
								'LinkedIn'
							)
						),
						React.createElement(
							'li',
							{ className: 'img-rounded' },
							React.createElement(
								'a',
								{ href: '#', target: '_blank' },
								React.createElement('i', { className: 'fa fa-github-square', 'aria-hidden': 'true' }),
								'Github'
							)
						),
						React.createElement(
							'li',
							{ className: 'img-rounded' },
							React.createElement(
								'a',
								{ href: '#', target: '_blank' },
								React.createElement('i', { className: 'fa fa-desktop', 'aria-hidden': 'true' }),
								'Portfolio'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'border cv col-xs-12 col-sm-3 col-md-3 col-lg-3' },
					React.createElement(
						'p',
						null,
						' Download CV'
					),
					React.createElement(
						'a',
						{ href: '#', target: '_blank' },
						React.createElement(
							'div',
							{ className: 'cv-icon' },
							React.createElement('i', { className: 'fa fa-file-pdf-o fa-4x', 'aria-hidden': 'true' })
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'border col-xs-12 col-sm-3 col-md-3 col-lg-3' },
					React.createElement(
						'p',
						null,
						' 3333333 '
					)
				),
				React.createElement(
					'div',
					{ className: 'about-me-wrapper img-rounded col-xs-12 col-sm-12 col-md-12 col-lg-12' },
					React.createElement(
						'p',
						null,
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ui officia deserunt mollit anim id est laborum.'
					)
				)
			),
			React.createElement(
				'div',
				null,
				React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow ', text: 'BOOKMARK THIS PROFILE' }),
				React.createElement(Button, { addClass: 'blue-bright fullwidth no-border button-text-style hvr-pulse-grow ', text: 'BACK TO LIST OF TALENTS' })
			)
		);
	}
});

module.exports = FullProfileDeveloper;