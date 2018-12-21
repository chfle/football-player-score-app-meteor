'use strict';

import React, { Component } from 'react';
import { Players } from '../api/players';

class AddPlayer extends Component {
   handleSubmit = (e) => {
     e.preventDefault();
     const inputPlayer = e.target.playerName.value.trim();

     if (inputPlayer) {
       Players.insert({
         name: inputPlayer,
         score: 0,
       });
       e.target.elements.playerName.value = '';
     }
   };

   render() {
     return (
       <div className="item">
         <form className="form" onSubmit={this.handleSubmit}>
           <input className="form__input" type="text" name="playerName" placeholder="player name" />
           <button className="button">Add Player</button>
         </form>
       </div>
     );
   }
}

export default AddPlayer;
