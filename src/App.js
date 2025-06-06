import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { getAccessToken, getFeaturedPlaylists } from './api/spotify'; // Nossa API
import PlaylistGrid from './components/PlaylistGrid';

function App() {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  // Este useEffect continua buscando os dados da API quando o app carrega
  useEffect(() => {
    const fetchTokenAndPlaylists = async () => {
      const accessToken = await getAccessToken();
      setToken(accessToken);

      if (accessToken) {
        const featuredPlaylists = await getFeaturedPlaylists(accessToken);
        // Estamos guardando os dados das playlists, vamos usá-los em breve
        setPlaylists(featuredPlaylists);
        console.log(featuredPlaylists); // Verifique o console do navegador
      }
    };

    fetchTokenAndPlaylists();
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
    <h2>Playlists em Destaque</h2>
    <hr />

    {/*
      Isso é uma renderização condicional:
      - Se a variável 'playlists' JÁ tiver dados, renderize o componente PlaylistGrid.
      - Se não (ainda está carregando), mostre a mensagem "Carregando...".
    */}
    {playlists ? (
        <PlaylistGrid playlists={playlists.playlists.items} />
    ) : (
        <p>Carregando playlists...</p>
    )}
</main>
    </div>
  );
}

export default App;