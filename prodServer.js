const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src', 'public')));
// Locate tournament jsons

app.use(cors())

app.get('/tournament', (req, res) => {
  const tournament = require(path.join(__dirname, 'tournament/data/gamesPerTeam.json'));
  res.send(tournament);
});




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening FSOBP website on port', port);
});
