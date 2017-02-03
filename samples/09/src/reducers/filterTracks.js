/**
 * Created by Timur on 03.02.2017.
 */
const initialState = "";


export default function filterTracks(state = initialState, action) {
  switch (action.type) {
    case 'FIND_TRACK' :
      return action.payload;
  }

  return state;
}
