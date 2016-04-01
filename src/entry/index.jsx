// Fix: throw error '_regeneratorRuntime is not defined' when using with generator functions,
// reference: https://phabricator.babeljs.io/T7041
import 'babel-polyfill';

import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../components/App';
import Lab from '../components/Lab';
import configureStore from '../store/index';

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

store.subscribe(() => {
  // TODO: save data
  const currentValue = store.getState();
  console.log('subscrite', currentValue);
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="custom" component={App} />
      </Route>
      <Route path="/lab" component={Lab} />
    </Router>
  </Provider>,
  document.getElementById('react-content')
);
