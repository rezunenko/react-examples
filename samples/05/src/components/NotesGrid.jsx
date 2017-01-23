var React = require('react');

require('./NotesGrid.css');


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

module.exports = NotesGrid;