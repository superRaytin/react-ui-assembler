import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  detail: {},
  layouts: [],
  gridToWidgetMap: {},
  fetching: false
};

export default handleActions({
  'proto/sync/detail' (state, action) {
    return u({
      detail: action.payload
    }, state);
  },

  'proto/sync/state' (state, action) {
    return u({
      layouts: action.payload.layouts,
      gridToWidgetMap: action.payload.gridToWidgetMap
    }, state);
  },

  'proto/change-grid-mount-status' (state, action) {
    return u({
      gridToWidgetMap: {
        [action.payload.key]: {
          mounted: action.payload.isMounted
        }
      }
    }, state);
  },

  'proto/sync/widget-map' (state, action) {
    return u({
      gridToWidgetMap: action.payload
    }, state);
  },

  'proto/request/start' (state, action) {
    return {...state, fetching: true};
  },

  'proto/request/end' (state, action) {
    return {...state, fetching: false};
  },
}, initialState);
