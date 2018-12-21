'use strict';

import React, { Component } from 'react';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import { Players, calPlayerPosition } from '../api/players';


class App extends Component {
  render() {
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const positionForPlayer = calPlayerPosition(players);
    const title = 'Football Players';
    return (
      <div>
        <TitleBar title={title} />
        <div className="wrapper">
          <PlayerList players={positionForPlayer} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;
