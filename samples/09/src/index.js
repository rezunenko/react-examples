import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';


const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playList(state = initialState, action) {
  switch(action.type){
    case 'ADD_TRACK' : return [... state,action.payload];
  }

  return state;
}

const store = new createStore(playList);

ReactDOM.render(
  <Provider store={store}>
    <App name="Timur"/>
  </Provider>,
  document.getElementById('mount-point')
);

//
// import {createStore} from 'redux';
//
// const initialState = []
//
// function playList(state = initialState, action) {
//   switch(action.type){
//     case 'ADD_TRACK' : return [... state,action.payload];
//   }
//
//   return state;
// }
//
// ReactDOM.render(
//   <App name="Timur"/>,
//   document.getElementById('mount-point')
// );
//
//
// const addTrackBtn = document.querySelector(".playlist__btn-add");
// const trackInput = document.querySelector(".playlist__input");
// const list = document.querySelector(".playlist__list");
//
// addTrackBtn.addEventListener('click', () => {
//     store.dispatch({ type: "ADD_TRACK", payload: trackInput.value });
// });
//
// const store = new createStore(playList);
//
// store.subscribe(() => {
//   trackInput.value = "";
//   list.innerHTML = "";
//   store.getState().forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     list.appendChild(li);
//   });
// });
//

