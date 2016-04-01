import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, fork, put, cancel } from 'redux-saga/effects';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function* fetchxxx(getState) {
  // add `while (true)` avoid errors when using with generator function
  // looks like it's babel's problem
  while (true) {
    const actionxxx = yield take('abc/xxx');
    console.log('saga', actionxxx);
    yield put({
      type: 'abc/sync/start'
    });
    yield call(delay, 1000);
    yield put({
      type: 'abc/setCounter',
      payload: 888,
    });
    yield put({
      type: 'abc/sync/end'
    });
  }
}

export default function* root(getState) {
  yield fork(fetchxxx, getState);
}
