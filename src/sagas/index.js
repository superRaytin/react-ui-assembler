import fetch from 'isomorphic-fetch';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, fork, put, cancel } from 'redux-saga/effects';
import u from 'updeep-mutable';

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

// 获取页面所有数据
function* fetchProtoData(getState) {
  yield put({
    type: 'proto/request/start'
  });

  const detailData = yield call(fetchData, '/proto/detail.json');
  const stateData = yield call(fetchData, '/proto/state.json');

  yield put({
    type: 'proto/sync/detail',
    payload: detailData.result.data,
  });

  const filteredState = u({
    layouts: u.map({
      isDraggable: false,
      isResizable: false
    }),
    gridToWidgetMap: stateData.result.data.gridToWidgetMap
  }, stateData.result.data);

  yield put({
    type: 'proto/sync/state',
    payload: filteredState,
  });

  yield put({
    type: 'proto/request/end'
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

function* watchFetchProtoData(getState) {
  while (true) {
    yield take('proto/sync');
    yield fork(fetchProtoData, getState);
  }
}

export default function* root(getState) {
  yield fork(watchFetchWidgets, getState);
  yield fork(watchFetchProtoData, getState);
}
