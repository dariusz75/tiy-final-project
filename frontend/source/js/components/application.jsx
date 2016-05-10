var React = require('react');
var ViewStore = require('../stores/ViewStore.js');
var Homepage = require('./homepage.jsx');
var RegistrationEmailPasswordDeveloper = require('./registration-email-password-developer.jsx');


var Application = React.createClass({

	 getInitialState: function () {
    return {
    	renderedPage: ViewStore.getCurrentPage()
    };
  },

  componentDidMount: function () {
  	ViewStore.addChangeListener(this.changePage);
  },

  changePage: function () {
  	this.setState({
  		renderedPage: ViewStore.getCurrentPage()
  	});
  },

	render: function() {
		if (this.state.renderedPage === 'Homepage') {
			return <Homepage />;
		} else if (this.state.renderedPage === 'RegistrationEmailPasswordDeveloper'){
			return <RegistrationEmailPasswordDeveloper />
		}

	}
});


module.exports = Application;

