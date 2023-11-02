import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";
import { FetchVideos } from "./useVideos";
import { FetchChannel } from "./useChannel";

const useSearch = (term: string) => {
  return useQuery({
    queryKey: ["search", term],
    queryFn: () =>
      api_client.get<FetchVideos | FetchChannel>("search", {
        params: {
          q: term,
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
          order: "date",
        },
      }),
  });
};

export default useSearch;
