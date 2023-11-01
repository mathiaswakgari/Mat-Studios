import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api_client from "../services/api_client";

import { Video } from "../hooks/useVideos";
import VideoPlayer from "../components/VideoPlayer";
import { Avatar, Text, VStack } from "@chakra-ui/react";

interface FetchVideo {
  items: Video[];
}
interface FetchVChannel {
  items: Channel[];
}

interface Channel {
  snippet: {
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
    title: string;
  };
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
  const { data: channel } = useQuery({
    queryKey: ["channels", data?.data.items[0].snippet.channelId],
    queryFn: () =>
      api_client.get<FetchVChannel>("channels", {
        params: {
          part: "snippet,statistics",
          id: data?.data.items[0].snippet.channelId,
        },
      }),
  });

  console.log(channel);

  const video = data?.data.items[0];

  return (
    <VStack w={"100%"}>
      <VideoPlayer id={id!} />
    </VStack>
  );
};

export default VideoPage;
