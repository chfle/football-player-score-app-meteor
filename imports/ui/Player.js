'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

class Player extends Component {
  render() {
    const {
      name, score, _id, rank, position,
    } = this.props;
    const itemClass = `item item--${rank}`;
    return (
      <div className={itemClass}>
        <div className="player">
          <div>
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">{`${position} ${score} point(s)`}</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => { Players.update(_id, { $inc: { score: +1 } }); }}>
                    +1
            </button>
            <button className="button button--round" onClick={() => { Players.update(_id, { $inc: { score: -1 } }); }}>
                    -1
            </button>
            <button className="button button--round" onClick={() => { Players.remove(_id); }}>
                    x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
};

export default Player;
