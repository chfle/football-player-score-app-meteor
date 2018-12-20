'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};


export default TitleBar;
