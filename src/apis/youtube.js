import axios from "axios";

const KEY = "AIzaSyAuNEmQdOoWq6K3Dy8zlSYsWyDDw_7BHd0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: KEY, part: "snippet", maxResults: 5 }
});
