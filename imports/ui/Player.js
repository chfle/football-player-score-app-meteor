'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

class Player extends Component {
  render() {
    const { name, score, _id } = this.props;
    return (
      <div className="item">
        <p>{ ` ${name} has ${score} point(s)`}</p>
        <button onClick={() => { Players.update(_id, { $inc: { score: +1 } }); }}>
          +1
        </button>
        <button onClick={() => { Players.update(_id, { $inc: { score: -1 } }); }}>
          -1
        </button>
        <button onClick={() => { Players.remove(_id); }}>
          x
        </button>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default Player;
