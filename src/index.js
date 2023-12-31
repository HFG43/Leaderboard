import './style.css';
import Flag from './Race-flag.svg';
import Scores from './scores.js';
import getURL from './url.js';
import {
  form,
  playerName,
  playerScore,
  refreshScores,
  scoreListContainer,
  flagContainer,
} from './dynamics.js';

const setNewScore = async (newScore) => {
  try {
    const url = await getURL();
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
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
  const url = await getURL();
  const resultSaved = await fetch(url);
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
  form.reset();
});

refreshScores.addEventListener('click', () => {
  scoreListContainer.innerHTML = '';
  getScores();
});

const raceFlag = new Image();
raceFlag.src = Flag;
raceFlag.classList.add('flag');
flagContainer.appendChild(raceFlag);
