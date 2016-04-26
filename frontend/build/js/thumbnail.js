var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
		displayName: 'exports',

		render: function () {
				return React.createElement(
						'div',
						{ className: 'col-sm-6 col-md-4' },
						React.createElement(
								'div',
								{ className: 'thumbnail' },
								React.createElement('img', { src: this.props.imageUrl }),
								React.createElement(
										'div',
										{ className: 'caption' },
										React.createElement(
												'h3',
												null,
												this.props.header
										),
										React.createElement(
												'p',
												null,
												this.props.descritption
										),
										React.createElement(
												'p',
												null,
												React.createElement(Badge, { title: this.props.title, number: this.props.number })
										)
								)
						)
				);
		}
});