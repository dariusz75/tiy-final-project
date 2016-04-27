var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	render: function () {
		return React.createElement(
			"button",
			{ className: "btn btn-primary " + this.props.addClass, type: "button" },
			React.createElement(
				"p",
				null,
				this.props.text
			)
		);
	}
});