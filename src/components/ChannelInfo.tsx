import { Avatar, HStack, VStack, Text, Divider } from "@chakra-ui/react";
import SubscribeButton from "./SubscribeButton";
import color from "../color";
import { Channel } from "../hooks/useChannel";
import millify from "millify";

interface Props {
  channel: Channel;
}

const ChannelInfo = ({ channel }: Props) => {
  const {
    snippet: {
      description,
      title,
      thumbnails: {
        medium: { url },
      },
    },
    statistics: { subscriberCount, videoCount },
  } = channel;

  return (
    <>
      <HStack w={"100%"} paddingY={2} color={color.textColor}>
        <Avatar size={{ base: "lg", md: "2xl" }} marginX={2} src={url} />
        <VStack w={"full"} alignItems={"start"}>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"}>
            {title}
          </Text>
          <HStack
            fontSize={{ base: "xs", md: "sm" }}
            color={color.textTwoColor}
          >
            <Text>{millify(parseInt(subscriberCount))} Subscribers</Text>
            <p>.</p>
            <Text>{millify(parseInt(videoCount))} Videos</Text>
          </HStack>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color={color.textTwoColor}
            noOfLines={2}
          >
            {description}
          </Text>
          <SubscribeButton />
        </VStack>
      </HStack>
    </>
  );
};

export default ChannelInfo;
