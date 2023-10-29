import {
  Card,
  Text,
  CardBody,
  Image,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react";

import color from "../color";
import { Video } from "../pages/Home";
import moment from "moment";

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
        cursor={"pointer"}
        _hover={{
          borderRadius: "0",
          transitionDuration: "500ms",
        }}
        borderRadius={"2xl"}
        height={video.snippet.thumbnails?.medium?.height}
        objectFit="cover"
        src={video.snippet.thumbnails?.medium?.url}
        alt="Chakra UI"
      />
      <CardBody>
        <HStack>
          <VStack gap={0}>
            <Text lineHeight={"4"} noOfLines={2}>
              {video.snippet.title}
            </Text>
            <Text noOfLines={1} alignSelf={"start"} color={color.textColor}>
              {video.snippet.channelTitle}
            </Text>
            <Text noOfLines={1} alignSelf={"start"}>
              # of Views
              {video.snippet.liveBroadcastContent! !== "live" &&
                " . " +
                  moment(Date.now()).diff(video.snippet.publishTime, "days") +
                  " days"}
            </Text>
            {video.snippet.liveBroadcastContent === "live" && (
              <Badge borderRadius={"sm"} alignSelf={"start"} colorScheme="red">
                Live
              </Badge>
            )}
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
