import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api_client from "../services/api_client";
import { Video } from "../hooks/useVideos";
import VideoPlayer from "../components/VideoPlayer";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import VideoInfo from "../components/VideoInfo";
import moment from "moment";
import color from "../color";
import millify from "millify";
import { useState } from "react";
import VideoDescription from "../components/VideoDescription";

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
  statistics: {
    subscriberCount: string;
    videoCount: string;
  };
}

const VideoPage = () => {
  const { id } = useParams();
  const [loadMore, setLoadMore] = useState(false);
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
  const { data: channelData } = useQuery({
    queryKey: ["channels", data?.data.items[0].snippet.channelId],
    queryFn: () =>
      api_client.get<FetchVChannel>("channels", {
        params: {
          part: "snippet,statistics",
          id: data?.data.items[0].snippet.channelId,
        },
      }),
  });

  const channel = channelData?.data?.items[0];

  const video = data?.data.items[0];

  return (
    <VStack w={"100%"}>
      <VideoPlayer id={id!} />
      <Text
        fontWeight={"semibold"}
        fontSize={"3xl"}
        noOfLines={1}
        alignSelf={"start"}
      >
        {video?.snippet.title}
      </Text>
      <VideoInfo
        channelTitle={channel?.snippet.title!}
        subscribers={channel?.statistics.subscriberCount!}
        channelUrl={channel?.snippet.thumbnails.medium.url!}
      />
      <VideoDescription
        onClick={() => setLoadMore(!loadMore)}
        loadMore={loadMore}
        video={video!}
      />
    </VStack>
  );
};

export default VideoPage;
