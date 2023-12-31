import { useInfiniteQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";
import { FetchVideos } from "./useVideos";

const useChannelVideos = (channelId: string) => {
  return useInfiniteQuery({
    queryKey: [channelId, "videos"],
    queryFn: () =>
      api_client.get<FetchVideos>("search", {
        params: {
          channelId: channelId,
          part: "snippet,id",
          order: "date",
          maxResults: "50",
        },
      }),
    refetchOnWindowFocus: false,
    getNextPageParam: () => {},
    initialPageParam: undefined,
  });
};

export default useChannelVideos;
