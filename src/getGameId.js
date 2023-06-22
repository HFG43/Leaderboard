import generateGameName from './generateGame.js';

const getGameId = async () => {
  const gameName = await generateGameName();
  const resultArray = gameName.split(' ');
  let gameId = '';
  for (let i = 0; i < resultArray.length; i += 1) {
    if (resultArray[i].length > gameId.length) {
      gameId = resultArray[i];
    }
  }
  localStorage.setItem('gameId', gameId);
  return gameId;
};

export default getGameId;
