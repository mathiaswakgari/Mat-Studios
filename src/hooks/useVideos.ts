import api_client from "../services/api_client";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  return useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: () => {
      return api_client.get<FetchVideos>("search", {
        params: {
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
        },
      });
    },
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    initialPageParam: undefined,
  });
};
export default useVideos;
