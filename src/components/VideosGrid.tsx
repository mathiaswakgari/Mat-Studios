import { SimpleGrid } from "@chakra-ui/react";
import { Video } from "../pages/Home";
import VideoCard from "./VideoCard";

interface Props {
  videos: Video[];
}

const VideosGrid = ({ videos }: Props) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        lg: 3,
        xl: 4,
      }}
      columnGap={9}
    >
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </SimpleGrid>
  );
};

export default VideosGrid;
