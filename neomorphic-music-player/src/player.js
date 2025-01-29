// src/Player.js
import React from 'react';
import './styles.css';

const Player = () => {
  return (
    <div className="player">
      <div className="album-art"></div>
      <div className="song-title">
        A Sky Full of Stars
        <div className="artist">Coldplay</div>
      </div>
      <div className="controls">
        <div className="control-btn"></div>
        <div className="control-btn"></div>
        <div className="control-btn"></div>
      </div>
    </div>
  );
};

export default Player;