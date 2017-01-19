/**
 * Created by Timur on 18.01.2017.
 */
var Note= React.createClass({
	render: function(){
		var style = {
			backgroundColor:this.props.color
		};
		return (
			<div className="note" style={style}>{this.props.children}</div>
		)
	}
});

var NoteEditor = React.createClass({
	render: function(){
		return (
			<div className="note-editor">NoteEditor</div>
		)
	}
});

var NotesGrid = React.createClass({
	render: function(){
		return (
			<div className="notes-grid" ref="grid">
				{
					this.props.notes.map(function(note){
						return <Note key={note.id} color={note.color} >{note.text}</Note>
					})
				}
			</div>
		)
	}
});

var NotesApp = React.createClass({
	getInitialState: function(){
			return {
				notes: [
					{
						id:1,
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi ducimus esse exercitationem id inventore maxime nam quam quia voluptas!',
						color: '#ffd700'
					},
					{
						id:2,
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloremque dolores, est explicabo fugiat harum iure labore nemo praesentium repudiandae saepe tempora voluptatum!',
						color: '#20b2aa'
					},
					{
						id:3,
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloremque',
						color: '#90ee90'
					},
					{
						id:4,
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut consectetur cum cupiditate, deserunt dolores, eos error facere itaque laudantium pariatur, ratione sed sint temporibus totam vero? Ipsam, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut consectetur cum cupiditate, deserunt dolores, eos error facere itaque laudantium pariatur, ratione sed sint temporibus totam vero? Ipsam, maiores.',
						color: '#87cefa'
					},
					{
						id:5,
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, praesentium?',
						color: '#ffb6c1'
					},
					{
						id:6,
						text: 'Lorem ipcitationem id inventore maxime nam quam quia voluptas!',
						color: '#ffa07a'
					},
					{
						id:7,
						text: 'A animi ducimus esse exercitationem id inventore maxime nam quam quia voluptas!',
						color: '#00fa9a'
					},

				]
			}
	},
	render: function(){
		return (
			<div className="notes-app">
				NotesApp
				<NoteEditor/>
				<NotesGrid notes={this.state.notes}/>
			</div>
		)
	}
});

ReactDOM.render(<NotesApp/>, document.getElementById('content'));