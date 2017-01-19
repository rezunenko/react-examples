/**
 * Created by Timur on 18.01.2017.
 */
var Note= React.createClass({
	render: function(){
		var style = {
			backgroundColor:this.props.color
		};
		return (
			<div className="note" style={style}>
				{this.props.children}
				<input type="submit" className="note__btn-del" value="x" onClick={this.props.onDelete}/>
			</div>
		)
	}
});

var NoteEditor = React.createClass({
	getInitialState: function(){
		this.color= 'rgba(100,0,0,1)';
		return {
			text:'',
			color: this.color
		}
	},
	handledTextChange: function(event){
		this.setState(
			{
				text: event.target.value,
				color: this.state.color
			});
	},
	handledColorChange: function(event){
		this.setState(
			{
				text: this.state.text,
				color: event.target.value
			});
	},
	handleNoteAdd:function(newNote){
		var newNote = {
			text:this.state.text,
			color:this.state.color,
			id:Date.now()
		};
		this.props.onNoteAdd(newNote);
		this.setState(this.getInitialState());
	},
	render: function(){
		return (
			<div className="note-editor">
				<textarea placeholder="Enter your note here"
									className="note-editor__text-field"
									value={this.state.text}
									onChange={this.handledTextChange}></textarea>
				<input type="color" className="note-editor__color-picker" onChange={this.handledColorChange}/>
				<input type="submit" value="ADD" className="note-editor__btn-send" onClick={this.handleNoteAdd}/>
			</div>
		)
	}
});

var NotesGrid = React.createClass({
	componentDidMount: function() {
		var grid = this.refs.grid;
		this.msnry = new Masonry( grid, {
			itemSelector: '.note',
			columnWidth: 300,
			gutter: 10
		});
	},
	componentDidUpdate:function(prevProps) {
		if(this.props.notes.length !== prevProps.notes.length){
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	},
	render: function(){
		var onDeleteFunc = this.props.onNoteDelete;
		return (
			<div className="notes-grid" ref="grid">
				{
					this.props.notes.map(function(note){
						return (
								<Note
									key={note.id}
									color={note.color}
									onDelete={onDeleteFunc.bind(null, note)}>
									{note.text}
								</Note>
						)
					})
				}
			</div>
		)
	}
});

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

ReactDOM.render(<NotesApp/>, document.getElementById('content'));