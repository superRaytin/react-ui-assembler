import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  layouts: [
    {i: 'a', x: 0, y: 0, w: 2, h: 2},
    {i: 'b', x: 2, y: 0, w: 2, h: 2},
    // {i: 'b', x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 4, static: false},
    {i: 'c', x: 4, y: 0, w: 2, h: 2},
    {i: 'd', x: 6, y: 0, w: 2, h: 2},
    {i: 'e', x: 8, y: 0, w: 2, h: 2}
  ],
  gridToWidgetMap: {
    /*
    * [i]: {
        source: code,
        mounted: false,
        style: '',
        id: ''
      }
    * */
  },
  detail: {},
  fetching: false
};

export default handleActions({
  'layout/change-grid-mount-status' (state, action) {
    return u({
      gridToWidgetMap: {
        [action.payload.key]: {
          mounted: action.payload.isMounted
        }
      }
    }, state);
  },

  'layout/reset-grid-mount-status' (state) {
    return u({
      gridToWidgetMap: u.map({
        mounted: false
      }, state.gridToWidgetMap)
    }, state);
  },

  'layout/create-widget-to-grid' (state, action) {
    return u({
      gridToWidgetMap: {
        [action.payload.key]: {
          source: action.payload.source,
          style: action.payload.style,
          id: action.payload.id,
          mounted: false
        }
      }
    }, state);
  },

  'grid/sync/layouts' (state, action) {
    // return {...state, layouts: action.payload};
    return u({
      layouts: action.payload
    }, state);
  },

  'grid/add' (state, action) {
    function addGrid(layouts) {
      return [...layouts, action.payload];
    }

    return u({
      layouts: addGrid
    }, state);
  },

  'workspace/sync/detail' (state, action) {
    return {...state, detail: action.payload};
  },

  'workspace/sync/state' (state, action) {
    return {
      ...state,
      layouts: action.payload.layouts,
      gridToWidgetMap: action.payload.gridToWidgetMap
    };
  },

  'layout/request/start' (state, action) {
    return {...state, fetching: true};
  },

  'layout/request/end' (state, action) {
    return {...state, fetching: false};
  },
}, initialState);
