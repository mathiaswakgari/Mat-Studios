import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api_client from "../services/api_client";

import { Video } from "../hooks/useVideos";

interface FetchVideo {
  items: Video[];
}

const VideoPage = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["videos", id],
    queryFn: () =>
      api_client.get<FetchVideo>("videos", {
        params: {
          part: "contentDetails,snippet,statistics",
          id: id,
        },
      }),
  });
  console.log(data);
  return <div>{id}</div>;
};

export default VideoPage;
