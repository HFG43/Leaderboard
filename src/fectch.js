import { url } from './url.js';

const setNewScore = async (newScore) => {
  //   const getId = await getGameId();
  try {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tJ0TIDemXqPa7nFliAbp/scores',
      {
        method: 'POST',
        body: JSON.stringify(newScore),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const newScoreResult = await result.json();
    return newScoreResult;
  } catch (error) {
    return error;
  }
};

const getScores = async () => {
  //   const getId = await getGameId();
  const resultSaved = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tJ0TIDemXqPa7nFliAbp/scores'
  );
  const savedScores = await resultSaved.json();
  console.log(savedScores.result);
  addscores(savedScores.result);
};
getScores();
