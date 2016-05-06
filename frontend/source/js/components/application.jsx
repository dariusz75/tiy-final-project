var React = require('react');
var ViewStore = require('../stores/ViewStore.js');



var Application = React.createClass({

	 getInitialState: function () {
    return {
    	renderedPage: ViewStore.getCurrentPage()
    };
  },

	render: function() {
		return 	<div>{this.state.CurrentPage}</div>;	  
	}
});


module.exports = Application;