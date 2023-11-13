import { Avatar, HStack, VStack, Text } from "@chakra-ui/react";
import millify from "millify";
import color from "../color";
import { BiDislike, BiLike } from "react-icons/bi";
import SubscribeButton from "./SubscribeButton";
import { Link } from "react-router-dom";

interface Props {
  channelUrl: string;
  channelTitle: string;
  subscribers: string;
  channelId: string;
}
const VideoInfo = ({
  channelTitle,
  channelUrl,
  subscribers,
  channelId,
}: Props) => {
  return (
    <HStack width={"100%"} alignSelf={"start"} justifyContent={"space-between"}>
      <Link to={`/channels/${channelId!}`}>
        <HStack>
          <Avatar alignSelf={"start"} size={"md"} src={channelUrl!} />
          <VStack lineHeight={1} alignItems={"start"}>
            <Text
              lineHeight={1}
              fontSize={"md"}
              color={color.textColor}
              fontWeight={"bold"}
            >
              {channelTitle!}
            </Text>
            <Text fontSize={"sm"} noOfLines={1} color={color.textTwoColor}>
              {millify(parseInt(subscribers!))} Subscribers
            </Text>
          </VStack>
          <SubscribeButton />
        </HStack>
      </Link>
      <HStack
        borderRadius={"full"}
        bg={"whiteAlpha.100"}
        shadow={"2xl"}
        height={"50px"}
        width={"100px"}
        justifyContent={"space-evenly"}
      >
        <BiDislike
          style={{
            fontSize: "20px",
            color: color.textColor,
          }}
        />
        <Text color={color.textColor}>|</Text>
        <BiLike
          style={{
            fontSize: "20px",
            color: color.textColor,
          }}
        />
      </HStack>
    </HStack>
  );
};

export default VideoInfo;
