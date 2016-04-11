import { createSelector } from 'reselect';

const getWidgetFilter = (state) => state.widget;
const getLayoutFilter = (state) => state.layout;

export const getWidget = createSelector(
  getWidgetFilter,
  (widgets) => widgets
);

export const getLayout = createSelector(
  getLayoutFilter,
  (layout) => layout
);
