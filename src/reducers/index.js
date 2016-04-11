import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import widget from './widget';
import layout from './layout';

export default combineReducers({
  widget,
  layout,
  routing
});
