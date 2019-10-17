const fs = require('fs');
const path = require('path');
const moment = require('moment')

const tournamentDate = '20191026'
const tournamentStartTime = '1300'
const gameCount = 13
const gameDurationMinutes = 20
const gameDay = moment(`${tournamentDate}T${tournamentStartTime}`)
const getGameTime = gameNumber => 
  moment(gameDay).add(gameDurationMinutes * gameNumber, 'minutes').format('HH:mm')

const gameTimes = Array(gameCount).fill().map((_, index) => 
  getGameTime(index)
)

// SKIPS THE FIRTS LINE
const fileToArrayLineByLine = (fileNameish, encoding, lineEnding) => {
  const fileName = fs
    .readdirSync(path.join(__dirname, 'data'))
    .filter(file => file.includes(fileNameish))[0];

  const filePath = path.join(__dirname, 'data', fileName);

  let array = [];
  try {
    const data = fs.readFileSync(filePath, encoding);
    array = data.toString().split(lineEnding).slice(1);
  } catch (error) {
    console.log('File error:', error)
  }
  return array;
}

const csvLineToArray = line => {
  const re = new RegExp('"', 'g');
  const cleanLine = line.replace(re, '').split(',');
  return cleanLine;
}

const tournament = fileToArrayLineByLine('tournament', 'utf-8', '\n').map(line => csvLineToArray(line));
const teams = fileToArrayLineByLine('teams', 'utf-8', '\n').map(line => csvLineToArray(line)[0]).filter(teamName => teamName !== undefined);

console.log('Teams:', teams.length);
console.log('Games:', tournament.length);

const generateGamesPerTeams = () => new Promise((resolve, reject) => {
  const gamesOfTeams = [];

  teams.forEach(team => {
    if (team.length > 0) {
      const teamGames = tournament
        .filter(gamesArray => {
          if (gamesArray.indexOf(team) === 0) {
            console.log('Team not found', team);
          }
          return gamesArray.indexOf(team) > 0
        })
        .map(games => {
          if (games) {
            if (team === undefined) {
              console.log('IS NULL', team, team === undefined);
            }
            return { team: team, ...teamLineArrayToObject(games) };
          }
          return
          console.log('NO LINE', team);
        });
      gamesOfTeams.push(teamGames);
      if (teamGames.length === 0) {
        console.log('Game not found', team);
      } else if (teamGames.length < 4) {
        console.log('Too few games', teamGames.length, team);
      } else if (teamGames.length > 4) {
        console.log('Too many games', teamGames.length, team);
      } else {
        return resolve(gamesOfTeams)
      }
      reject('Don\'t know why here');
    }
  });
});


const calculateGameTimes = gameNum => gameTimes[parseInt(gameNum / 16 - 0.0625)];


const teamLineArrayToObject = array => {
  const gameNumber = array[0];
  const team1 = array[1];
  const team2 = array[2];
  const time = calculateGameTimes(gameNumber);
  const result = { gameNumber, team1, team2, time }
  return result;
}

const generateTournamentJson = () => {
  generateGamesPerTeams().then(result => {
    const resultPath = path.join(__dirname, 'data', 'gamesPerTeam.json');
    fs.writeFileSync(resultPath, JSON.stringify(result));
    console.log('TOURNAMENT JSON CREATED');
  })
    .catch(reason => console.log(reason));
}
generateTournamentJson();

