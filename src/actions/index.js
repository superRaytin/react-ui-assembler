import { createAction } from 'redux-actions';

// widget
export const fetchWidgets = createAction('widget/group/sync/trigger');
export const restoreWidgets = createAction('widget/restore');
export const filterWidgets = createAction('widget/filter');
export const fetchWidgetDataById = createAction('widget/detail');

// layout
export const layoutSyncAll = createAction('layout/sync/all');
export const changeActiveGrid = createAction('layout/change-active-grid');
export const createWidgetToGridBySource = createAction('layout/create-widget-to-grid');
export const changeGridMountStatus = createAction('layout/change-grid-mount-status');
export const resetGridMountStatus = createAction('layout/reset-grid-mount-status');

// grid
export const addGrid = createAction('grid/add');
export const enableGridRemove = createAction('grid/enable-remove');
export const disableGridRemove = createAction('grid/disable-remove');

// proto
export const fetchProtoData = createAction('proto/sync/trigger');
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
export const toggleWidgetEditModal = createAction('editor/toggle-widget-edit-modal');
