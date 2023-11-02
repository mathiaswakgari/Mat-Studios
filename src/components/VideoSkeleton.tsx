import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import color from "../color";

const VideoSkeleton = () => {
  return (
    <Box marginBottom={5}>
      <Skeleton
        startColor={color.bgColor}
        endColor={color.sloganColor}
        borderRadius={"2xl"}
        height={180}
        width={320}
      ></Skeleton>
      <SkeletonText
        startColor={color.bgColor}
        endColor={color.sloganColor}
        mt={"4"}
        noOfLines={2}
        spacing={2}
        skeletonHeight={"4"}
      />
    </Box>
  );
};

export default VideoSkeleton;
