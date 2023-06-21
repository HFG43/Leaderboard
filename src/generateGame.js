const generateGameName = async () => {
  const result = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'Bike Downhill Championship',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  if (result.ok) {
    const data = await result.json();
    const nameResult = data.result;
    return nameResult;
  }
  return 'error';
};
generateGameName();

export default generateGameName;
