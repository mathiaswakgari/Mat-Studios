import axios from "axios";
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import VideosGrid from "../components/VideosGrid";

interface FetchVideos {
  items: Video[];
  pageInfo: {
    totalResults: number;
  };
}
export interface Video {
  id: {
    kind: "youtube#video";
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails?: {
      default?: {
        url: "string";
        width: number;
        height: number;
      };
      high?: {
        url: "string";
        width: number;
        height: number;
      };
      medium?: {
        url: "string";
        width: number;
        height: number;
      };
    };
    title: string;
  };
}

const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    axios
      .get<FetchVideos>("https://youtube-v31.p.rapidapi.com/search", {
        params: {
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      })
      .then((res) => setVideos(res.data?.items));
  }, []);

  if (videos) return <VideosGrid videos={videos} />;

  return <div>Home</div>;
};

export default Home;
