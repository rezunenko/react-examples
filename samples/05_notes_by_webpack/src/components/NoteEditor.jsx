var React = require('react');

require('./NoteEditor.css');


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


module.exports = NoteEditor;