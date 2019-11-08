import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tablePage state domain
 */

const selectTablePageDomain = state => state.get('tablePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TablePage
 */

const makeSelectTablePage = () =>
  createSelector(selectTablePageDomain, substate => substate.toJS());

export default makeSelectTablePage;
export { selectTablePageDomain };
