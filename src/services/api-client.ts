import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    regionCode: "IN",
    maxResults: 15,
    key: "AIzaSyAotMk2tTdqmdQ7elZoCxzwiSghAbJCZZ0",
  },
});
