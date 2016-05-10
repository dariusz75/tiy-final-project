var React = require('react');

var Button = React.createClass({
		render: function() {
			return 	<button className={"btn btn-primary "+this.props.addClass} type="button" onClick={this.props.onClick}>
  						{this.props.text}
					</button>;
		}
	});

module.exports = Button;