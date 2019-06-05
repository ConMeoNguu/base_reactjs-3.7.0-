import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the qbcd state domain
 */

const selectQbcdDomain = state => state.get('qbcd', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Qbcd
 */

const makeSelectQbcd = () =>
  createSelector(selectQbcdDomain, substate => substate.toJS());

export default makeSelectQbcd;
export { selectQbcdDomain };
