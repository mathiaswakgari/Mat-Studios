import { useEffect, useState } from "react";
import api_client from "../services/api_client";

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
        width: 120;
        height: 90;
      };
      high?: {
        url: "string";
        width: 480;
        height: 360;
      };
      medium?: {
        url: "string";
        width: 320;
        height: 180;
      };
    };
    title: string;
  };
}

const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    api_client
      .get<FetchVideos>("search", {
        params: {
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
      })
      .then((res) => {
        setVideos(res.data?.items);
      });
  }, []);

  return { videos };
};
export default useVideos;
