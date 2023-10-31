import {
  Card,
  Text,
  CardBody,
  Image,
  HStack,
  VStack,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";

import color from "../color";
import { Video } from "../hooks/useVideos";
import moment from "moment";
import { Link } from "react-router-dom";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  return (
    <Link to={`videos/${video.id.videoId}`}>
      <Card
        maxW={"xs"}
        borderTopRadius={"2xl"}
        background={"transparent"}
        shadow={"none"}
      >
        <AspectRatio maxW={320} ratio={16 / 9}>
          <Image
            cursor={"pointer"}
            _hover={{
              borderRadius: "0",
              transitionDuration: "500ms",
            }}
            borderRadius={"2xl"}
            objectFit="cover"
            src={video.snippet.thumbnails?.medium?.url}
            alt="Chakra UI"
          />
        </AspectRatio>
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
                <Badge
                  borderRadius={"sm"}
                  alignSelf={"start"}
                  colorScheme="red"
                >
                  Live
                </Badge>
              )}
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default VideoCard;
