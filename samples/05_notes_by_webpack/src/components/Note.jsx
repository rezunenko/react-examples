var React = require('react');

require('./Note.css');

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

module.exports = Note;