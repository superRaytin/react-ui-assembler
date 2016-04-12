import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import widget from './widget';
import layout from './layout';
import proto from './view';

export default combineReducers({
  widget,
  layout,
  proto,
  routing
});
