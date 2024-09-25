const fetchVideoStatistics = async (id) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyAcN0-U5thT6x1nD-SixW9gG0movoBG7S0`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.items[0].statistics;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideoStatistics;
