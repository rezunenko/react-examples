const initialState = [];


export default function tracks(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRACK' :
      return [... state, action.payload];
    case 'DELETE_TRACK' :
      return state;
  }

  return state;
}
