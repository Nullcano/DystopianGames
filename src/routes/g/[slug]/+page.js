export async function load({ fetch, params }) {
  const API_KEY = '8e13a9f500bb4de3b28ac0ef03f052e8';
  try {
    const response = await fetch(`https://api.rawg.io/api/games/${params.slug}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }
    const gameData = await response.json();
    return {
      gameData: gameData
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      error: {
        message: 'Failed to fetch data from the server'
      }
    };
  }
}
