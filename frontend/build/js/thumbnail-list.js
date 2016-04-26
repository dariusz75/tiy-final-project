'use strict';

var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({ displayName: "exports",
	render: function render() {
		var list = this.props.thumbnailData.map(function (thumbnailProps) {
			return React.createElement(Thumbnail, { key: thumbnailProps.id, imageUrl: thumbnailProps.imageUrl, header: thumbnailProps.header, descritption: thumbnailProps.descritption, title: thumbnailProps.title, number: thumbnailProps.number });
		});
		return React.createElement("div", null, list);
	}
});