import { handleActions } from 'redux-actions';
import u from 'updeep-mutable';

const initialState = {
  data: [],
  backdata: [],
  fetching: false
};

export default handleActions({
  'widget/group/sync/all' (state, action) {
    return {...state, data: action.payload};
  },

  'widget/restore' (state, action) {
    return {...state, data: action.payload};
  },

  'widget/backup' (state, action) {
    return {...state, backdata: action.payload};
  },

  'widget/filter' (state, action) {
    function filter(widget) {
      return widget.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
    }

    let data = [];
    state.backdata.forEach((group) => {
      const widgets = group.widgets.filter(filter);

      data.push({
        ...group,
        widgets
      });
    });

    return {...state, data, fetching: false};
  },

  'widget/sync/start' (state, action) {
    return {...state, fetching: true};
  },

  'widget/sync/end' (state, action) {
    return {...state, fetching: false};
  },
}, initialState);
