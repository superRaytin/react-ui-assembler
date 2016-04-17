import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  value: '',
  widgetData: {},
  showWidgetEditModal: false
};

export default handleActions({
  'editor/value' (state, action) {
    return u({
      value: action.payload
    }, state);
  },

  'editor/widget/data' (state, action) {
    return u({
      widgetData: action.payload
    }, state);
  },

  'editor/widget/source' (state, action) {
    return u({
      value: action.payload
    }, state);
  },

  'editor/toggle-widget-edit-modal' (state, action) {
    return {...state, showWidgetEditModal: action.payload};
  },

  'editor/reset' (state, action) {
    return {...state, value: '', widgetData: {}};
  },

}, initialState);
