import React, {Component} from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div>{track.name}</div>;

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    track: state.tracks.find(track => track.id === +ownProps.params.id)
  };
}

export default connect(mapStateToProps)(Track);

