import { useParams } from "react-router-dom";

import VideoPlayer from "../components/VideoPlayer";
import { Text, VStack } from "@chakra-ui/react";
import VideoInfo from "../components/VideoInfo";

import { useState } from "react";
import VideoDescription from "../components/VideoDescription";

import Comments from "../components/Comments";
import useVideo from "../hooks/useVideo";
import useChannel from "../hooks/useChannel";
import useComments from "../hooks/useComments";

const VideoPage = () => {
  const { id } = useParams();
  const [loadMore, setLoadMore] = useState(false);

  const { data: videoData, isLoading } = useVideo(id!);
  const { data: channelData } = useChannel(
    videoData?.data.items![0]?.snippet?.channelId!
  );

  const { data: commentsData } = useComments(id!);
  if (isLoading) return <Text>Loading....</Text>;

  const channel = channelData?.data;
  const video = videoData?.data.items![0]!;

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
