import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  prototypes: [],
  fetching: false
};

export default handleActions({
  'personal/sync/prototypes' (state, action) {
    return u({
      prototypes: action.payload
    }, state);
  },

  'personal/request/start' (state, action) {
    return {...state, fetching: true};
  },

  'personal/request/end' (state, action) {
    return {...state, fetching: false};
  },
}, initialState);
