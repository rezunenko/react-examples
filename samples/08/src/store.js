
class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(item => item !== callback);
  }

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }
}


export default Store;
//
// const unsubscribe = store.subscribe(() => console.log('State changed', store.state));
// const unsubscribe2 = store.subscribe(() => console.log('State changed new', store.state));
//
// store.update(incrementAction);
// store.update(decrementAction);
//
// store.update({});
