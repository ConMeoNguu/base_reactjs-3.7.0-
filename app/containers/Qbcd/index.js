/**
 *
 * Qbcd
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectQbcd from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Qbcd extends React.Component {
  render() {
    return <div>anc</div>;
  }
}

Qbcd.propTypes = {
  //   dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  qbcd: makeSelectQbcd(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'qbcd', reducer });
const withSaga = injectSaga({ key: 'qbcd', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Qbcd);
