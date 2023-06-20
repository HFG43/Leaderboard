import './style.css';
import Scores from './scores.js';

const scores = [
  {
    player: 'Player1',
    score: 100,
    index: 0,
  },
  {
    player: 'Player2',
    score: 400,
    index: 1,
  },
  {
    player: 'Player3',
    score: 200,
    index: 2,
  },
  {
    player: 'Player4',
    score: 40,
    index: 3,
  },
];

const scoreListContainer = document.querySelector('.recent_scores_list_container');

const addscores = () => {
  scores.forEach((score) => {
    const newScore = new Scores(score.player, score.score, score.index);
    const scoreContainer = document.createElement('li');
    scoreContainer.innerText = `${newScore.player}: ${newScore.score}`;
    scoreContainer.classList.add('score_item');
    scoreListContainer.appendChild(scoreContainer);
    return newScore;
  });
};
addscores();