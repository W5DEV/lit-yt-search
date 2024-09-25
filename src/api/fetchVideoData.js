import fetchSearchResults from "./fetchSearchResults";
import fetchVideoStatistics from "./fetchVideoStatistics";

const fetchVideoData = async (query, order) => {
  try {
    const searchResults = await fetchSearchResults(query, order);
    const videoDetails = [];
    for (let result of searchResults) {
      const videoStatistics = await fetchVideoStatistics(result.id.videoId);
      videoDetails.push({
        videoId: result.id.videoId,
        title: result.snippet.title,
        image: result.snippet.thumbnails.default.url,
        description: result.snippet.description,
        commentCount: videoStatistics.commentCount || 0,
        favoriteCount: videoStatistics.favoriteCount,
        likeCount: videoStatistics.likeCount,
        viewCount: videoStatistics.viewCount,
      });
    }
    return videoDetails;
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideoData;
