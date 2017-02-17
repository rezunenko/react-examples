var React = require('react');
var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');
require('./NotesApp.css');


var NotesApp = React.createClass({
	getInitialState: function(){
		return {
			notes: []
		}
	},
	componentDidMount: function(){
		var localNotes = JSON.parse(localStorage.getItem('notes'));
		if(localNotes){
			this.setState({notes: localNotes});
		}
	},
	componentDidUpdate: function(){
		this._updateLocalStorage();
	},
	handleNoteAdd:function(newNote){
		var newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);
		this.setState({ notes: newNotes});
	},
	handleNoteDelete: function(note){
		var noteID = note.id
		var newNotes = this.state.notes.filter(function(note){
			return note.id !== noteID;
		});
		this.setState({notes: newNotes});
	},
	render: function(){
		return (
			<div className="notes-app">
				<NoteEditor onNoteAdd={this.handleNoteAdd}/>
				<NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
			</div>
		)
	},
	_updateLocalStorage: function(){
		var notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}
});

module.exports = NotesApp;