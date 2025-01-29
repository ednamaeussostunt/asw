// src/App.js
import React from 'react';
import './styles.css';
import Player from './Player';
import Playlist from './Playlist';

function App() {
  return (
    <div className="container">
      <Player />
      <Playlist />
    </div>
  );
}

export default App;