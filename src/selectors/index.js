import { createSelector } from 'reselect';

const getxxxFilter = (state) => state.xxx;

export const getxxx = createSelector(
  getxxxFilter,
  (xxx) => {
    console.log('selector changed!');
    return xxx;
  }
);
