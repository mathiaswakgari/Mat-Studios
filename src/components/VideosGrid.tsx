import { SimpleGrid } from "@chakra-ui/react";
import VideoCard from "./VideoCard";
import { FetchVideos } from "../hooks/useVideos";
import React from "react";
import VideoSkeleton from "./VideoSkeleton";

import { InfiniteData } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

interface Props {
  isFetching: boolean;
  data: InfiniteData<AxiosResponse<FetchVideos, any>, unknown>;
}

const VideosGrid = ({ isFetching, data }: Props) => {
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
