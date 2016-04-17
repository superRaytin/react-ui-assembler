import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  showProtoEditModal: false,
  showWidgetEditModal: false,
  enableGridRemove: false,
  activeGridKey: null,
};

export default handleActions({
  'toggle-proto-edit-modal' (state, action) {
    return {...state, showProtoEditModal: action.payload};
  },

  'toggle-widget-edit-modal' (state, action) {
    return {...state, showWidgetEditModal: action.payload};
  },

  'toggle-grid-remove' (state, action) {
    return {...state, enableGridRemove: action.payload};
  },

  'change-active-grid-key' (state, action) {
    return {...state, activeGridKey: action.payload};
  },
}, initialState);
