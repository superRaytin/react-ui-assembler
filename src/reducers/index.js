import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import xxx from './xxx';
import yyy from './yyy';

export default combineReducers({
  xxx,
  yyy,
  routing
});
