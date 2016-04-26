var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
	thumbnailData: [{
		id: 'object1',
		title: 'See tutorials ',
		number: 32,
		header: 'Learn React',
		descritption: 'React is a new fantastic framework for building fast, dynamic pages React is a new fantastic framework for building fast, dynamic pages',
		imageUrl: 'https://tleunen.github.io/react-mdl/react.svg'
		},
		{
		id: 'object2',
		title: 'See tutorials ',
		number: 25,
		header: 'Learn Gulp',
		descritption: 'Gulp will speed up your developmant process. Gulp will speed up your developmant process.',
		imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
		}]
};


	var parentElement = document.querySelector('.target');

	var element = React.createElement(ThumbnailList, options);

	ReactDOM.render(element, parentElement);