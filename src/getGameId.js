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
  return gameId;
};
getGameId();

export default getGameId;
