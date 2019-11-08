import { fromJS } from 'immutable';
import tablePageReducer from '../reducer';

describe('tablePageReducer', () => {
  it('returns the initial state', () => {
    expect(tablePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
