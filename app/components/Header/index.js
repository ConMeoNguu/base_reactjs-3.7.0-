/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './index.css';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className="body-header">
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
