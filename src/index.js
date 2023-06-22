import './style.css';
import Scores from './scores.js';
// import getGameId from './getGameId.js';
import {
  submitNewScore,
  form,
  playerName,
  playerScore,
  refreshScores,
  scoreListContainer,
} from './dynamics.js';

let scores = [];



const addscores = async (savedScores) => {
  scores.forEach((score) => {
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
