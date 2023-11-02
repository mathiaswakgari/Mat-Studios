import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";
import { Video } from "./useVideos";

interface FetchVideo {
  items?: Video[];
}

const useVideo = (id: string) => {
  return useQuery({
    queryKey: ["videos", id],
    queryFn: () =>
      api_client.get<FetchVideo>("videos", {
        params: {
          part: "contentDetails,snippet,statistics",
          id: id,
        },
      }),
  });
};

export default useVideo;
