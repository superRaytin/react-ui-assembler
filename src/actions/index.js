import { createAction } from 'redux-actions';

// ui state
export const toggleProtoEditModal = createAction('toggle-proto-edit-modal');
export const toggleWidgetEditModal = createAction('toggle-widget-edit-modal');
export const toggleGridRemove = createAction('toggle-grid-remove');
export const changeActiveGridKey = createAction('change-active-grid-key');

// widget
export const fetchWidgets = createAction('widget/group/sync/trigger');
export const restoreWidgets = createAction('widget/restore');
export const filterWidgets = createAction('widget/filter');
export const fetchWidgetDataById = createAction('widget/detail');

// layout
export const createWidgetToGridBySource = createAction('layout/create-widget-to-grid');
export const changeGridMountStatus = createAction('layout/change-grid-mount-status');
export const resetGridMountStatus = createAction('layout/reset-grid-mount-status');

// grid
export const gridSyncLayouts = createAction('grid/sync/layouts');
export const addGrid = createAction('grid/add');

// workspace
export const workspaceFetchProtoDetail = createAction('workspace/sync/detail/trigger');
export const workspaceFetchProtoData = createAction('workspace/sync/proto/trigger');
export const createProtoSave = createAction('workspace/create/proto/trigger');
export const modifyProtoSave = createAction('workspace/modify/proto/trigger');

// proto
export const viewFetchProtoData = createAction('proto/sync/trigger');
export const fetchProtoDetail = createAction('proto/sync/detail');
export const fetchProtoState = createAction('proto/sync/state');
export const fetchWidgetMap = createAction('proto/sync/widget-map');
export const protoChangeGridMountStatus = createAction('proto/change-grid-mount-status');

// personal
export const fetchPersonalPrototypes = createAction('personal/sync/trigger');

// developer
export const fetchDeveloperWidgets = createAction('developer/sync/trigger');
export const sendDataToWidgetEditModal = createAction('developer/send-data-to-widget-modal');

// editor
export const editorUpdateValue = createAction('editor/value');
export const editorReset = createAction('editor/reset');
export const editorSyncWidgetData = createAction('editor/widget/data');
export const editorFetchWidgetDataById = createAction('editor/widget/data/trigger');
export const editorFetchWidgetSourceById = createAction('editor/widget/source/trigger');
export const editorSaveWidget = createAction('editor/widget/save/trigger');
