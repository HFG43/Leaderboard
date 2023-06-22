import './style.css';
import Scores from './scores.js';
import getGameId from './getGameId.js';
import { submitNewScore, form, playerName, playerScore } from './dynamics.js';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newScore = new Scores("player1", 25);
     setNewScore(newScore);
});

const setNewScore = async (newScore) => {
  const getId = await getGameId();
  const result = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getId}/scores`,
    {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  if (result.ok) {
      const nameResult = await result.json();
      console.log(nameResult)
  } else {
    console.log('Define a new name');
  }
};


// const scoreListContainer = document.querySelector('.recent_scores_list_container');

// const addscores = () => {
//   scores.forEach((score) => {
//     const newScore = new Scores(score.user, score.score);
//     const scoreContainer = document.createElement('li');
//     scoreContainer.innerText = `${newScore.user}: ${newScore.score}`;
//     scoreContainer.classList.add('score_item');
//     scoreListContainer.appendChild(scoreContainer);
//     return newScore;
//   });
// };
// addscores();
