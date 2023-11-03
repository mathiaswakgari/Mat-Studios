import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";
import { Video } from "./useVideos";
import { Channel } from "./useChannel";

interface FetchSearchResult {
  items: (Video | Channel)[];
}

const useSearch = (term: string, category: "video" | "channel" | string) => {
  return useQuery({
    queryKey: ["search", category, term],
    queryFn: () =>
      api_client.get<FetchSearchResult>("search", {
        params: {
          q: term,
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
          order: "",
          type: category,
        },
      }),
  });
};

export default useSearch;
