var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	render: function () {
		return React.createElement(
			"button",
			{ className: "btn btn-primary", type: "button" },
			this.props.title,
			React.createElement(
				"span",
				{ className: "badge" },
				"TEST"
			)
		);
	}
});