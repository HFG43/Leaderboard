import getGameId from './getGameId.js';

const getIdFromLocalStorage = JSON.parse(localStorage.getItem('id'));
if (getIdFromLocalStorage === undefined) {
  await getGameId();
  url = getIdFromLocalStorage;
  return url;
} else 
  { url = getIdFromLocalStorage;
    return url;
};

export default { url};