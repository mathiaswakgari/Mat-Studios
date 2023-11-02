import { SimpleGrid, Text } from "@chakra-ui/react";
import VideoCard from "./VideoCard";
import useVideos from "../hooks/useVideos";
import React from "react";
import VideoSkeleton from "./VideoSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const VideosGrid = () => {
  const { data, isError, isFetching } = useVideos();

  if (isError) return <Text>Error</Text>;

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
      {isFetching
        ? skeletons.map((s) => <VideoSkeleton key={s} />)
        : data?.pages.map((page) => (
            <React.Fragment>
              {page.data.items.map((video) => (
                <VideoCard video={video} />
              ))}
            </React.Fragment>
          ))}
    </SimpleGrid>
  );
};

export default VideosGrid;
