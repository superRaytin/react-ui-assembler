import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import uistate from './uistate';
import widget from './widget';
import layout from './layout';
import proto from './view';
import personal from './personal';
import developer from './developer';
import editor from './editor';

export default combineReducers({
  uistate,
  widget,
  layout,
  proto,
  personal,
  developer,
  editor,
  routing
});
