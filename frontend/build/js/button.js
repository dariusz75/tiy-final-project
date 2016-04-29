var React = require('react');

var Button = React.createClass({
	displayName: "Button",

	render: function () {
		return React.createElement(
			"button",
			{ className: "btn btn-primary " + this.props.addClass, type: "button" },
			this.props.text
		);
	}
});

module.exports = Button;