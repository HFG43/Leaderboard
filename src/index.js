import './style.css';
import Scores from './scores.js';
import getGameId from './getGameId.js';

async function getRecentScores() {
  const result = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameId}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: '',
        score: ''
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );

  if (result) {
    nameResult = result.value;
  } else {
    alert('Define a new name');
  }
}

// const scores = [
//   {
//     player: 'Player1',
//     score: 100,
//     index: 0,
//   },
//   {
//     player: 'Player2',
//     score: 400,
//     index: 1,
//   },
//   {
//     player: 'Player3',
//     score: 200,
//     index: 2,
//   },
//   {
//     player: 'Player4',
//     score: 40,
//     index: 3,
//   },
// ];

// const scoreListContainer = document.querySelector('.recent_scores_list_container');

// const addscores = () => {
//   scores.forEach((score) => {
//     const newScore = new Scores(score.player, score.score, score.index);
//     const scoreContainer = document.createElement('li');
//     scoreContainer.innerText = `${newScore.player}: ${newScore.score}`;
//     scoreContainer.classList.add('score_item');
//     scoreListContainer.appendChild(scoreContainer);
//     return newScore;
//   });
// };
// addscores();
