import useChannelVideos from "../hooks/useChannelVideos";
import { Box } from "@chakra-ui/react";
import VideosGrid from "./VideosGrid";

interface Props {
  channelId: string;
}

const ChannelVideos = ({ channelId }: Props) => {
  const { data: channelVideos, isFetching } = useChannelVideos(channelId!);
  return (
    <Box marginY={5} height={"100%"}>
      <VideosGrid isFetching={isFetching} data={channelVideos!} />
    </Box>
  );
};

export default ChannelVideos;
