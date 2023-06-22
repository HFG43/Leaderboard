import './style.css';
// import { setNewScore, getScores } from './fectch.js';
import Scores from './scores.js';
// import getGameId from './getGameId.js';
import getURL from './url.js';
import {
  submitNewScore,
  form,
  playerName,
  playerScore,
  refreshScores,
  scoreListContainer,
} from './dynamics.js';

const setNewScore = async (newScore) => {
  try {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tJ0TIDemXqPa7nFliAbp/scores',
      {
        method: 'POST',
        body: JSON.stringify(newScore),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const newScoreResult = await result.json();
    return newScoreResult;
  } catch (error) {
    return error;
  }
};

const addScore = async (newScore) => {
  const scoreContainer = document.createElement('li');
  scoreContainer.innerText = `${newScore.user}: ${newScore.score}`;
  scoreContainer.classList.add('score_item');
  scoreListContainer.appendChild(scoreContainer);
};

const addScores = async (savedScores) => {
  savedScores.result.forEach((score) => {
    addScore(score);
  });
};

const getScores = async () => {
  const resultSaved = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tJ0TIDemXqPa7nFliAbp/scores'
  );
  const savedScores = await resultSaved.json();
  addScores(savedScores);
};
getScores();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = playerName.value;
  const score = playerScore.value;
  const newScore = new Scores(name, score);
  setNewScore(newScore);
  addScore(newScore);
});

getURL();