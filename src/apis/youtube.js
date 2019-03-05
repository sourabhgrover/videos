import axios from "axios";

const KEY = "AIzaSyAuNEmQdOoWq6K3Dy8zlSYsWyDDw_7BHd0";

axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: { key: KEY, part: "snippet", maxResults: 5 }
});
