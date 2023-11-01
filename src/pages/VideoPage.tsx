import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api_client from "../services/api_client";

import { Video } from "../hooks/useVideos";
import VideoPlayer from "../components/VideoPlayer";

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

  return <VideoPlayer id={id!} />;
};

export default VideoPage;
