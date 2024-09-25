const fetchSearchResults = async (query, order) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=${order}&key=AIzaSyAcN0-U5thT6x1nD-SixW9gG0movoBG7S0`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.items;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchSearchResults;
