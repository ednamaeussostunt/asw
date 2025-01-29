// src/Playlist.js
import React from 'react';
import './styles.css';

const Playlist = () => {
  const playlistItems = [
    { title: "Up & Up", artist: "Cheat Codes" },
    { title: "Paradise", artist: "Coldplay" },
    { title: "A Sky Full of Stars", artist: "Coldplay" },
    { title: "Hymn for the Weekend", artist: "Coldplay" },
    { title: "Yellow", artist: "Coldplay" },
    { title: "Fix You", artist: "Coldplay" },
    { title: "A Head Full of Dreams", artist: "Coldplay" }
  ];

  return (
    <div className="playlist">
      <div className="album-art"></div>
      <div className="song-title">
        A Sky Full of Stars
        <div className="artist">Coldplay</div>
      </div>
      <div className="playlist-items">
        {playlistItems.map((item, index) => (
          <div key={index} className="playlist-item">
            <div>{item.title}</div>
            <div>{item.artist}</div>
            <div className="control-btn"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;