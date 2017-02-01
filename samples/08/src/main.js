import ReactDOM from 'react-dom';
import React from 'react';

import Store from './store';

const initialState = {
  count: 0
}

function updateState(state, action) {
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

const incrementAction = { type: 'INCREMENT', amount: 1 };
const decrementAction = { type: 'DECREMENT', amount: 1 };
const resetAction = { type: 'RESET', amount: 0 };

const store = new Store(updateState, initialState);

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
    store.update(incrementAction);
  }

  decrement() {
    store.update(decrementAction);
  }

  reset(){
    store.update(resetAction);
  }

  render (){
    return (
      <div>
        <div>
          {store.state.count}
        </div>
        <div>
          <input type="button" value="-" onClick={this.decrement}/>
          <input type="button" value="R" onClick={this.reset}/>
          <input type="button" value="+" onClick={this.increment}/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <Counter/>,
  document.getElementById('mount-point')
);
