import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import {getTracks} from '../actions/tracks.js';

import Menu from './menu';

class App extends React.Component {
  addTrack() {
    console.log('AddTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value="";
  }
  findTrack() {
    console.log('AddTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }
  render() {
    console.log('asdfsdaf', this.props.ownProps);
    return (
      <div className="playlist">
        <h1>Hello, {this.props.name}</h1>
        <div>
          <Menu/>
        </div>
        <div>
          <input type="text" className="playlist__input" placeholder="Введите название трека" ref={(input) => { this.trackInput = input }}/>
          <input type="button" className="playlist__btn-add" value="Add track"  onClick={this.addTrack.bind(this)}/>
        </div>
        <div>
          <input type="text" className="playlist__input" placeholder="Введите название трека" ref={(input) => { this.searchInput = input }}/>
          <input type="button" className="playlist__btn-add" value="Find track" onClick={this.findTrack.bind(this)}/>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get Tracks</button>
        </div>
        <ul className="playlist__list">
          {
            this.props.tracks.map((track,index) => {
              return (
                <li key={index}>
                  <Link to={`/tracks/${track.id}`}>
                    {track.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_TRACK', payload})
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }

  })
)(App);
