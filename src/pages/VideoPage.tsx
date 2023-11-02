import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api_client from "../services/api_client";
import { Video } from "../hooks/useVideos";
import VideoPlayer from "../components/VideoPlayer";
import { Text, VStack } from "@chakra-ui/react";
import VideoInfo from "../components/VideoInfo";

import { useState } from "react";
import VideoDescription from "../components/VideoDescription";

import Comments from "../components/Comments";

interface FetchVideo {
  items?: Video[];
}
interface FetchVChannel {
  items: Channel[];
}

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
    title?: string;
  };
  statistics: {
    subscriberCount: string;
    videoCount: string;
  };
}

const VideoPage = () => {
  const { id } = useParams();
  const [loadMore, setLoadMore] = useState(false);
  const { data, isLoading } = useQuery({
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
    queryKey: ["channels", data?.data?.items![0].snippet?.channelId!],
    queryFn: () =>
      api_client.get<FetchVChannel>("channels", {
        params: {
          part: "snippet,statistics",
          id: data?.data?.items![0]?.snippet?.channelId!,
        },
      }),
  });
  const { data: commentsData } = useQuery({
    queryKey: ["comments", data?.data.items![0].id.videoId],
    queryFn: () =>
      api_client.get<FetchComments>("commentThreads", {
        params: {
          part: "snippet",
          videoId: id,
          maxResults: "100",
        },
      }),
  });

  if (isLoading) return <Text>Loading....</Text>;

  const channel = channelData?.data;
  const video = data?.data.items![0]!;

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
        channelTitle={channel?.items[0]?.snippet?.title!}
        subscribers={channel?.items[0].statistics?.subscriberCount!}
        channelUrl={channel?.items[0].snippet?.thumbnails?.medium?.url!}
      />
      <VideoDescription
        onClick={() => setLoadMore(!loadMore)}
        loadMore={loadMore}
        video={video!}
      />
      <Comments
        commentCount={video?.statistics?.commentCount!}
        comments={commentsData?.data.items!}
      />
    </VStack>
  );
};

export default VideoPage;
