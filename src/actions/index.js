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
