const fetchSearchResults = async (query, order) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=${order}&key=AIzaSyBe-Mi5zI65oM0HnU1T-Exx0Ap2698NzrI`,
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
