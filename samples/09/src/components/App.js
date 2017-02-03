import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  addTrack() {
    console.log('AddTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value="";
  }
  render() {
    return (
      <div className="playlist">
        <h1>Hello, {this.props.name}</h1>
        <input type="text" className="playlist__input" placeholder="Введите название трека" ref={(input) => { this.trackInput = input }}/>
        <input type="button" className="playlist__btn-add" value="Добавить"  onClick={this.addTrack.bind(this)}/>
        <ul className="playlist__list">
          {
            this.props.tracks.map((track,index) => {
              return <li key={index}>{track}</li>;
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({type: 'ADD_TRACK', payload: trackName})
    }
  })
)(App);
