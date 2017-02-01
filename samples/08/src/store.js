export function createStore(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    callbacks.forEach(callback => callback());
  }

  const subscribe = callback => {
    callbacks.push(callback);
    return () => callbacks.filter(item => item !== callback);
  }

  // вывод объекта состояния при первой отрисовки. Если не указать, то выдаст ошибки, так как при обращении к getState не найдет значение.
  dispatch({});

  return { getState, dispatch, subscribe };
}

// class Store {
//   constructor(updateState, state) {
//     this._state = state;
//     this._updateState = updateState;
//     this._callbacks = [];
//   }
//
//   get state() {
//     return this._state;
//   }
//
//   subscribe(callback) {
//     this._callbacks.push(callback);
//     return () => this._callbacks = this._callbacks.filter(item => item !== callback);
//   }
//
//   update(action) {
//     this._state = this._updateState(this._state, action);
//     this._callbacks.forEach(callback => callback());
//   }
// }
//
//
// export default Store;
