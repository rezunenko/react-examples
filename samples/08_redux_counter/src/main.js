import ReactDOM from 'react-dom';
import React from 'react';

// вывод  самописной либы (аналоги редакса)
//import {createStore} from './store';

// подключение редакса
import {createStore} from 'redux';

import './main.scss';

function reducer(state = { count : 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.amount
      }
      break;
    case 'DECREMENT':
      return {
        count: state.count - action.amount
      }
      break;
    case 'RESET':
      return {
        count: 0
      }
      break;
    default:
      return state;
  }
}

const resetAction = { type: 'RESET', amount: 0 };

function increment(amount){
  return { type: 'INCREMENT', amount };
}

function decrement(amount) {
  return { type: 'DECREMENT', amount };
}

const store = new createStore(reducer);

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment(){
    let amount = +(this.refs.amount.value || 1);
    store.dispatch(increment(amount));
  }

  decrement() {
    let amount = +(this.refs.amount.value || 1);
    store.dispatch(decrement(amount));
  }

  reset(){
    store.dispatch(resetAction);
  }

  render (){
    const count = store.getState().count;
    return (
      <div className="counter">
        <div className="counter__display">
          {count}
        </div>
        <div className="counter__controls">
          <input type="button" value="-" onClick={this.decrement} className="counter__btn"/>
          <input type="button" value="R" onClick={this.reset} className="counter__btn"/>
          <input type="button" value="+" onClick={this.increment} className="counter__btn"/>
        </div>
        <div>
          <input type="text" ref="amount" defaultValue="1" className="counter__input"/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <Counter/>,
  document.getElementById('mount-point')
);
