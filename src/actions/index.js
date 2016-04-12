import { createAction } from 'redux-actions';

// widget
export const fetchWidgets = createAction('widget/group/sync');
export const restoreWidgets = createAction('widget/restore');
export const filterWidgets = createAction('widget/filter');

// layout
export const layoutSyncAll = createAction('layout/sync/all');
export const changeActiveGrid = createAction('layout/change-active-grid');
export const createWidgetToGridBySource = createAction('layout/create-widget-to-grid');
export const changeGridMountStatus = createAction('layout/change-grid-mount-status');

// grid
export const addGrid = createAction('grid/add');
export const enableGridRemove = createAction('grid/enable-remove');
export const disableGridRemove = createAction('grid/disable-remove');

// proto
export const fetchProtoData = createAction('proto/sync');
export const fetchProtoDetail = createAction('proto/sync/detail');
export const fetchProtoState = createAction('proto/sync/state');
export const fetchWidgetMap = createAction('proto/sync/widget-map');
export const protoChangeGridMountStatus = createAction('proto/change-grid-mount-status');
