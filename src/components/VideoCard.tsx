import {
  Card,
  Avatar,
  Text,
  CardBody,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

import color from "../color";
import { Video } from "../pages/Home";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  return (
    <Card
      maxW="xs"
      borderTopRadius={"2xl"}
      background={"transparent"}
      shadow={"none"}
    >
      <Image
        borderRadius={"2xl"}
        height={video.snippet.thumbnails?.medium?.height}
        objectFit="cover"
        src={video.snippet.thumbnails?.medium?.url}
        alt="Chakra UI"
      />
      <CardBody>
        <HStack>
          <Avatar
            name="Segun Adebayo"
            size={"sm"}
            src="https://bit.ly/sage-adebayo"
            alignSelf={"start"}
          />
          <VStack gap={0}>
            <Text lineHeight={"4"} noOfLines={2}>
              {video.snippet.title}
            </Text>
            <Text noOfLines={1} alignSelf={"start"} color={color.textColor}>
              {video.snippet.channelTitle}
            </Text>
            <Text noOfLines={1} alignSelf={"start"}>
              # of Views
            </Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
