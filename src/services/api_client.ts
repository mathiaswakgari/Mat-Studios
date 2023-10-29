import axios from "axios";

export default axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});
