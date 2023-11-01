import { Box, Button, Text } from "@chakra-ui/react";
import color from "../color";
import millify from "millify";
import moment from "moment";
import { Video } from "../hooks/useVideos";

interface Props {
  onClick: () => void;
  loadMore: boolean;
  video: Video;
}

const VideoDescription = ({ onClick, video, loadMore }: Props) => {
  const lessDescription =
    video?.snippet?.description?.length! >= 500
      ? video?.snippet.description.slice(0, 500)
      : video?.snippet.description;

  return (
    <Box
      alignSelf={"start"}
      bg={color.baseColor}
      w={"100%"}
      borderRadius={"2xl"}
      paddingX={2}
    >
      <Text noOfLines={1} alignSelf={"start"}>
        {`${millify(parseInt(video.statistics?.viewCount!))} views`}
        {video?.snippet.liveBroadcastContent! !== "live" &&
          " . " +
            moment(Date.now()).diff(video.snippet?.publishTime, "days") +
            " days ago"}
      </Text>
      <Text>
        {loadMore ? video?.snippet.description : lessDescription + "..."}
        <Button size={"xs"} colorScheme={"green"} onClick={onClick}>
          {loadMore ? "Less" : "More"}
        </Button>
      </Text>
    </Box>
  );
};

export default VideoDescription;
