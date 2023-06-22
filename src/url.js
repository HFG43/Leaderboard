import getGameId from './getGameId.js';

const getURL = async () => {
  let getIdFromLocalStorage = localStorage.getItem('gameId');
  let idForURL = '';
  if (getIdFromLocalStorage === null) {
    await getGameId();
    getIdFromLocalStorage = localStorage.getItem('gameId');
  }
  idForURL = getIdFromLocalStorage;
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idForURL}/scores`;
  return url;
};

export default getURL;
