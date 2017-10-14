var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router

var routes = require('./config/routes');

var Main = require('./Components/main.js');


ReactDOM.render(

	<div className ='main-container'>

		<Main />

	</div>,
	document.getElementByID('app')
)