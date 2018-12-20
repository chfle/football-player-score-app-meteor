'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';


const PlayerList = ({ players }) => (
  <div>
    {!players.length ? <p className="item item__message">No players</p>
      : players.map(player => <Player key={player._id} {...player} />)
    }
  </div>
);

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};


export default PlayerList;
