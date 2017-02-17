import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';

import './index.scss';
import reducer from './reducers';

// //  __REDUX_DEVTOOLS_EXTENSION__  для работы отладчика Redux
// const store = new createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Подключение middleware для написания асинхронных экшенов
const store = new createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Router>
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


