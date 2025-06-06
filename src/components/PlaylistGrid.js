// src/components/PlaylistGrid.js
import React from 'react';
import './PlaylistGrid.css';

// O componente recebe a lista de playlists através de uma prop chamada 'playlists'
function PlaylistGrid({ playlists }) {
  return (
    <div className="playlist-grid">
      {/* Usamos o .map() para percorrer cada item da lista de playlists.
        Para cada 'playlist', criamos um card.
      */}
      {playlists.map((playlist) => (
        // A 'key' é importante para o React identificar cada item da lista de forma única.
        <div className="playlist-card" key={playlist.id}>
          {/* A API do Spotify nos dá várias imagens, pegamos a primeira (geralmente a maior) */}
          <img src={playlist.images[0].url} alt={playlist.name} />
          <h4>{playlist.name}</h4>
          <p>{playlist.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlaylistGrid;