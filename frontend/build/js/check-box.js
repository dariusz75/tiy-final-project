var React = require('react');

var SingleCheckBox = React.createClass({
	displayName: "SingleCheckBox",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"label",
				null,
				React.createElement("input", { type: "checkbox", value: this.props.value }),
				React.createElement(
					"p",
					null,
					this.props.title
				)
			)
		);
	}
});

var FullList = React.createClass({
	displayName: "FullList",

	render: function () {
		var list = this.props.skillsData.map(function (listProps) {
			return React.createElement(SingleCheckBox, { value: listProps.value, title: listProps.title, key: listProps.value });
		});
		return React.createElement(
			"div",
			{ className: "list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3" },
			list
		);
	}
});

module.exports = FullList;