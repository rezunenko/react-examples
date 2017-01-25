/**
 * Created by rezun on 20.01.2017.
 */
var ReactDOM = require('react-dom');
var React = require('react');
var NotesApp = require('./components/NotesApp.jsx');

ReactDOM.render(
	<NotesApp/>,
	document.getElementById('content')
);
