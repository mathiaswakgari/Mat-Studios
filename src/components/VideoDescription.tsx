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
      ? video?.snippet.description.slice(0, 500) + "..."
      : video?.snippet.description;

  console.log(lessDescription);

  return (
    <Box
      alignSelf={"start"}
      bg={"#262626"}
      w={"100%"}
      borderRadius={"2xl"}
      paddingX={2}
      color={color.textColor}
    >
      <Text
        fontSize={"md"}
        noOfLines={1}
        alignSelf={"start"}
        color={color.textTwoColor}
      >
        {`${millify(parseInt(video?.statistics?.viewCount!))} views`}
        {video?.snippet.liveBroadcastContent! !== "live" &&
          " . " + moment(video?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
      </Text>
      <Text fontSize={"sm"}>
        {loadMore ? video?.snippet?.description : lessDescription}
        {video?.snippet?.description?.length! >= 500 && (
          <Button
            size={"xs"}
            borderRadius={"full"}
            colorScheme={"gray"}
            onClick={onClick}
          >
            {loadMore ? "Less" : "More"}
          </Button>
        )}
      </Text>
    </Box>
  );
};

export default VideoDescription;
