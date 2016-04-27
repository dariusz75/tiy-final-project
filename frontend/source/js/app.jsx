var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');

var parentElement = document.querySelector('.target');
var element = React.createElement(Button);

	var FinalComponent = React.createClass({
		render: function() {
		return <div>
			  		<Button addClass="green-darkest fullwidth no-border button-text-style" text="Register as a Developer" />
			  		<Button addClass="blue-dark fullwidth no-border button-text-style" text="Register as an Employer" />	
			  	 </div>		  
	}
});



ReactDOM.render(<FinalComponent />, parentElement);