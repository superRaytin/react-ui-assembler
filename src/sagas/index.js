import fetch from 'isomorphic-fetch';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, fork, put, cancel } from 'redux-saga/effects';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 获取数据
async function fetchData(url) {
  const result = await fetch(url, {
    type: 'json'
  }).then(response => response.json());

  return {
    result
  };
}

// 获取所有控件
function* fetchWidgets(getState) {
  yield put({
    type: 'widget/sync/start'
  });

  const widgets = yield call(fetchData, '/widget/group/getAll.json');

  yield put({
    type: 'widget/group/sync/all',
    payload: widgets.result.data,
  });

  yield put({
    type: 'widget/backup',
    payload: widgets.result.data,
  });

  yield put({
    type: 'widget/sync/end'
  });
}

// ******************************************************************************/
// ******************************* WATCHERS *************************************/
// ******************************************************************************/

function* watchFetchWidgets(getState) {
  while (true) {
    yield take('widget/group/sync');
    yield fork(fetchWidgets, getState);
  }
}

export default function* root(getState) {
  yield fork(watchFetchWidgets, getState);
}
