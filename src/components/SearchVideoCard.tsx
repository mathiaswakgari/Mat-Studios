import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import color from "../color";
import { Video } from "../hooks/useVideos";
import moment from "moment";
import { Link } from "react-router-dom";

interface Props {
  video: Video;
}

const SearchVideoCard = ({ video }: Props) => {
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      title,
      thumbnails,
      description,
      channelId,
      channelTitle,
      liveBroadcastContent,
    },
  } = video;
  return (
    <Link
      to={`/videos/${videoId}`}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        marginY={2}
        direction={"row"}
        borderTopRadius={"2xl"}
        shadow={"none"}
        alignItems={{ base: "center", md: "flex-start" }}
        bg={"transparent"}
        w={{ base: "100%", xl: "80%" }}
      >
        <Image
          cursor={"pointer"}
          _hover={{
            borderRadius: "0",
            transitionDuration: "500ms",
          }}
          w={{ base: 320 / 2, sm: 320 / (3 / 2), md: 320 }}
          h={{ base: 180 / 2, sm: 180 / (3 / 2), md: 180 }}
          borderRadius={"2xl"}
          objectFit="cover"
          src={thumbnails?.medium?.url}
        />
        <Stack>
          <CardBody>
            <HStack>
              <VStack gap={{ base: 1, md: 3 }}>
                <Box alignSelf={"start"}>
                  <Text
                    alignSelf={"start"}
                    lineHeight={"5"}
                    fontSize={{ base: "md", md: "lg" }}
                    color={color.textColor}
                    noOfLines={1}
                  >
                    {title}
                  </Text>
                  <Text
                    marginTop={1}
                    noOfLines={1}
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    alignSelf={"start"}
                    color={color.textTwoColor}
                  >
                    {` ${moment(publishedAt, "YYYYMMDD").fromNow()}`}
                  </Text>
                </Box>
                <Text
                  alignSelf={"start"}
                  fontSize={"sm"}
                  color={color.textTwoColor}
                >
                  <Link to={`/channels/${channelId}`}> {channelTitle}</Link>
                </Text>
                <Text
                  noOfLines={1}
                  alignSelf={"start"}
                  color={color.textTwoColor}
                  fontSize={"xs"}
                >
                  {description}
                </Text>
                {liveBroadcastContent === "live" && (
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
        </Stack>
      </Card>
    </Link>
  );
};

export default SearchVideoCard;
