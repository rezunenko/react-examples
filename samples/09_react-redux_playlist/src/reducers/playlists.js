const initialState = [
    "My home playlist",
    "My work playlist",
  ];

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYLIST' :
      return [... state, action.payload];
    case 'DELETE_PLAYLIST' :
      return state;
  }

  return state;
}
