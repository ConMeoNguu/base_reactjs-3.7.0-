import { fromJS } from 'immutable';
import qbcdReducer from '../reducer';

describe('qbcdReducer', () => {
  it('returns the initial state', () => {
    expect(qbcdReducer(undefined, {})).toEqual(fromJS({}));
  });
});
