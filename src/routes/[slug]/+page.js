export async function load({ fetch, params }) {
  const API_KEY = '8e13a9f500bb4de3b28ac0ef03f052e8';
  const page = params.slug;

  const page_size = 20;
  const tags = ['dystopian', 'cyberpunk', 'post-apocalyptic'];
  const formattedTags = tags.join(',');

  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&tags=${formattedTags}&page=${page}&page_size=${page_size}&ordering=-released`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from server');
    }

    const gamesData = await response.json();

    function formatDate(inputDate) {
      const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      
      const dateParts = inputDate.split("-");
      const year = dateParts[0];
      const month = months[parseInt(dateParts[1]) - 1];
      const day = dateParts[2];
      
      return `${day}, ${month} ${year}`;
    }
    
    gamesData.results.forEach(game => game.released = formatDate(game.released));

    return {
      gamesData: gamesData,
      page: page
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      error: {
        message: 'Failed to fetch data from server'
      }
    };
  }
}