import fetch from 'isomorphic-fetch';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, fork, put, cancel } from 'redux-saga/effects';
import u from 'updeep-mutable';
import {
  message
} from 'antd';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 获取数据
async function fetchData(url) {
  const result = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

  return result;
}

// 发送数据
async function postData(url, data) {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());

  return result;
}

// 获取所有控件
function* fetchWidgets(getState) {
  yield put({
    type: 'widget/sync/start'
  });

  const widgets = yield call(fetchData, '/widget/group/getAll.json');

  yield put({
    type: 'widget/group/sync/all',
    payload: widgets.data,
  });

  yield put({
    type: 'widget/backup',
    payload: widgets.data,
  });

  yield put({
    type: 'widget/sync/end'
  });
}

// 获取页面所有数据
function* fetchProtoDetail() {
  yield put({
    type: 'proto/request/start'
  });

  const detailData = yield call(fetchData, '/proto/detail.json');

  yield put({
    type: 'proto/sync/detail',
    payload: detailData.data,
  });

  yield put({
    type: 'proto/request/end'
  });
}

// 获取页面 state 数据
function* fetchProtoState() {
  yield put({
    type: 'proto/request/start'
  });

  const stateData = yield call(fetchData, '/proto/state.json');

  // 原型稿在查看页面浏览，不可编辑
  const filteredState = u({
    layouts: u.map({
      isDraggable: false,
      isResizable: false
    }),
    gridToWidgetMap: stateData.data.gridToWidgetMap
  }, stateData.data);

  yield put({
    type: 'proto/sync/state',
    payload: filteredState,
  });

  yield put({
    type: 'proto/request/end'
  });
}

function* fetchProtoData() {
  yield fork(fetchProtoDetail);
  yield fork(fetchProtoState);
}

// 获取我的原型稿列表
function* fetchPersonalPrototypes(getState) {
  yield put({
    type: 'personal/request/start'
  });

  const widgetListData = yield call(fetchData, '/proto/list.json');

  yield put({
    type: 'personal/sync/prototypes',
    payload: widgetListData.data,
  });

  yield put({
    type: 'personal/request/end'
  });
}

// 获取开发者的组件列表
function* fetchDeveloperWidgets(getState) {
  yield put({
    type: 'developer/request/start'
  });

  const widgetListData = yield call(fetchData, '/developer/widget/list.json');

  yield put({
    type: 'developer/sync/widgets',
    payload: widgetListData.data,
  });

  yield put({
    type: 'developer/request/end'
  });
}

// 编辑器获取组件数据
function* editorFetchWidgetData(action) {
  const widgetDetailData = yield call(postData, '/widget/detail.json', {
    id: action.payload.id
  });

  yield put({
    type: 'editor/widget/data',
    payload: widgetDetailData.data,
  });

  yield put({
    type: 'editor/value',
    payload: widgetDetailData.data.source,
  });
}

// 编辑器获取组件代码
function* editorFetchWidgetSource(action) {
  const widgetSourceData = yield call(postData, '/widget/source.json', {
    id: action.payload.id
  });

  yield put({
    type: 'editor/widget/source',
    payload: widgetSourceData.data.source,
  });
}

// 编辑器获取组件代码
function* editorSaveWidget(getState, action) {
  const payload = action.payload;
  const data = u({
    ...payload
  }, getState().editor.widgetData);

  const result = yield call(postData, '/widget/save.json', {
    ...data
  });

  if (result.success) {
    message.success('保存成功。');
  } else {
    message.error('系统出错，请重试。');
  }
}

// ******************************************************************************/
// ******************************* WATCHERS *************************************/
// ******************************************************************************/

function* watchFetchWidgets(getState) {
  yield* takeEvery('widget/group/sync/trigger', fetchWidgets);
}

function* watchFetchProtoData() {
  yield* takeEvery('proto/sync/trigger', fetchProtoData);
}

function* watchFetchPersonalPrototypes() {
  yield* takeEvery('personal/sync/trigger', fetchPersonalPrototypes);
}

function* watchFetchDeveloperWidgets() {
  yield* takeEvery('developer/sync/trigger', fetchDeveloperWidgets);
}

function* watchEditorFetchWidgetData() {
  yield* takeEvery('editor/widget/data/trigger', editorFetchWidgetData);
}

function* watchEditorWidgetSource() {
  yield* takeEvery('editor/widget/source/trigger', editorFetchWidgetSource);
}

function* watchEditorSaveWidget(getState) {
  yield* takeEvery('editor/widget/save/trigger', editorSaveWidget, getState);
}

export default function* root(getState) {
  yield fork(watchFetchWidgets, getState);
  yield fork(watchFetchProtoData, getState);
  yield fork(watchFetchPersonalPrototypes, getState);
  yield fork(watchFetchDeveloperWidgets, getState);

  yield fork(watchEditorFetchWidgetData, getState);
  yield fork(watchEditorWidgetSource, getState);
  yield fork(watchEditorSaveWidget, getState);
}
