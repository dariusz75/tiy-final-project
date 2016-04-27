var React = require('react');

module.exports = React.createClass({
		render: function() {
			return 	<button className={"btn btn-primary "+this.props.addClass} type="button">
  						<p>{this.props.text}</p>
							</button>
		}
	});