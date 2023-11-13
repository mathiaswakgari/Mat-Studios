import { Skeleton, SkeletonText, Box } from "@chakra-ui/react";
import color from "../color";

const VideoSkeleton = () => {
  return (
    <Box marginBottom={5}>
      <Skeleton
        startColor={color.bgColor}
        endColor={color.sloganColor}
        borderRadius={"2xl"}
        height={{ base: 150, sm: 120, md: 150 }}
        width={{ base: 280, sm: 220, md: 280 }}
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
