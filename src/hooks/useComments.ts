import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";

interface FetchComments {
  items: Comment[];
}

export interface Comment {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorChannelId: { value: string };
        authorDisplayName: string;
        authorProfileImageUrl: string;
        channelId: string;
        publishedAt: string;
        textDisplay: string;
        likeCount: number;
      };
    };
  };
}

const useComments = (videoId: string) => {
  return useQuery({
    queryKey: ["comments", videoId],
    queryFn: () =>
      api_client.get<FetchComments>("commentThreads", {
        params: {
          part: "snippet",
          videoId: videoId,
          maxResults: "100",
        },
      }),
  });
};

export default useComments;
