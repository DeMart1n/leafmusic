import axios from 'axios';

const authEndpoint = 'https://accounts.spotify.com/api/token';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const getAccessToken = async () => {
  const authHeader = 'Basic ' + btoa(clientId + ':' + clientSecret);
  try {
    const response = await axios.post(
      authEndpoint,
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authHeader,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao obter o token de acesso:', error);
  }
};

export const getFeaturedPlaylists = async (token) => {
  if (!token) {
    console.error("Token de acesso não fornecido para getFeaturedPlaylists");
    return null;
  }

  const requestUrl = 'https://api.spotify.com/v1/browse/featured-playlists';

  try {
    const response = await axios.get(requestUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        country: 'BR',
        limit: 20
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar playlists em destaque:', error.message);
    return null;
  }
};