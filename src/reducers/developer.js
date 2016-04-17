import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  widgets: [],
  fetching: false
};

export default handleActions({
  'developer/sync/widgets' (state, action) {
    return u({
      widgets: action.payload
    }, state);
  },

  'developer/request/start' (state, action) {
    return {...state, fetching: true};
  },

  'developer/request/end' (state, action) {
    return {...state, fetching: false};
  },
}, initialState);
