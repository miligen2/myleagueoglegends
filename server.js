// server.js
import express from 'express';
import axios from 'axios';


const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api', (req, res) => {
  const riotApiUrl = 'https://euw1.api.riotgames.com';
  const apiUrlWithoutPrefix = req.url.replace(/^\/api/, ''); // Supprimer le préfixe "/api"
  const requestUrl = `${riotApiUrl}${apiUrlWithoutPrefix}`;
  const apiKey = 'RGAPI-49aabf09-15c4-4d9e-8a41-ea0bd9dc9b26';

  const headers = {
    'X-Riot-Token': apiKey,
  };

  axios({
    method: req.method,
    url: requestUrl,
    headers: headers,
    data: req.body,
  })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).json(error.response.data);
    });
});


app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
