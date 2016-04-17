// Fix: throw error '_regeneratorRuntime is not defined' when using with generator functions,
// reference: https://phabricator.babeljs.io/T7041
import 'babel-polyfill';

import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Workspace from '../components/workspace/Index';
import View from '../components/view/Index';
import Personal from '../components/personal/Index';
import Developer from '../components/developer/Index';
import Editor from '../components/editor/Index';
import NoMatch from '../components/NoMatch';
import configureStore from '../store/index';

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

store.subscribe(() => {
  // TODO: save data
  const currentValue = store.getState();
  // console.log('subscrite', currentValue);
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={Workspace} />
        <Route path="workspace" component={Workspace}>
          <Route path=":protoId" component={Workspace} />
        </Route>
        <Route path="view/:protoId" component={View} />
        <Route path="personal" component={Personal} />
        <Route path="developer" component={Developer} />
        <Route path="editor" component={Editor} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-content')
);
