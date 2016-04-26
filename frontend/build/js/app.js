var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');

var parentElement = document.querySelector('.target');

var element = React.createElement(Button);

ReactDOM.render(element, parentElement);