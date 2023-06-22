import './style.css';
import Scores from './scores.js';
import getGameId from './getGameId.js';
import {
  submitNewScore,
  form,
  playerName,
  playerScore,
  refreshScores,
  scoreListContainer,
} from './dynamics.js';

let scores = [];

const setNewScore = async (newScore) => {
  const getId = await getGameId();
  try {
    const result = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getId}/scores`,
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

const getScores = async () => {
  const getId = await getGameId();
  try {
    const resultSaved = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getId}/scores`
    );
    const savedScores = await resultSaved.json();
    console.log(savedScores);
  } catch (error) {
    return error;
  }
};
getScores();

const addscores = async () => {
  scores.forEach((score) => {
    scores = [];
    const scoreContainer = document.createElement('li');
    scoreContainer.innerText = `${score.user}: ${score.score}`;
    scoreContainer.classList.add('score_item');
    scoreListContainer.appendChild(scoreContainer);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = playerName.value;
  const score = playerScore.value;
  const newScore = new Scores(name, score);
  scores = [...scores, newScore];
  setNewScore(newScore);
  addscores();
});
