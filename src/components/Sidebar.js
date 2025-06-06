// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import logoSpotify from '../assets/leafLogo.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logoSpotify} alt="Logo Spotify" className="sidebar__logo" />

      <ul className="sidebar__navigation">
        <li>
          <button>🏠 Início</button>
        </li>
        <li>
          <button>🔍 Buscar</button>
        </li>
        <li>
          <button>📚 Sua Biblioteca</button>
        </li>
      </ul>

      <div className="sidebar__playlists">
        <h4>MINHAS PLAYLISTS</h4>
        <ul>
          <li>Playlist 1</li>
          <li>Rock Anos 2000</li>
          <li>Músicas para Foco</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;