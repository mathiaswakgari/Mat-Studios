import { SimpleGrid, Text } from "@chakra-ui/react";
import VideoCard from "./VideoCard";
import useVideos from "../hooks/useVideos";
import React from "react";

const VideosGrid = () => {
  const { data, isError, isLoading, isFetching } = useVideos();

  if (isError) return <Text>Error</Text>;
  if (isFetching) return <Text>Laoding..</Text>;

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
      {data?.pages.map((page) => (
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
