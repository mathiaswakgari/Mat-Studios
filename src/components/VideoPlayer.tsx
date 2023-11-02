import { AspectRatio, VStack } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";

interface Props {
  id: string;
}

const VideoPlayer = ({ id }: Props) => {
  return (
    <VStack w={"100%"}>
      <AspectRatio w={{ base: "100%", xl: "80%" }} ratio={16 / 9}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width={"100%"}
          height={"100%"}
          playing
          style={{
            overflow: "hidden",
            borderRadius: "20px",
          }}
        />
      </AspectRatio>
    </VStack>
  );
};

export default VideoPlayer;
