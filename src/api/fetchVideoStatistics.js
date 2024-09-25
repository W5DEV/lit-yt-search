const fetchVideoStatistics = async (id) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyBe-Mi5zI65oM0HnU1T-Exx0Ap2698NzrI`,
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
