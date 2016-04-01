import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware(sagas);

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(reducers, initialState, enhancer);

  return store;
}
