'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

const PlayerList = ({ players }) => (
  <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
    {!players.length ? <p className="item item__message">No players</p>
      : players.map(player => <Player key={player._id} {...player} />)
    }
  </FlipMove>
);

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};


export default PlayerList;
