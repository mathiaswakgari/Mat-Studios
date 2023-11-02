import { Avatar, HStack, VStack, Text, Button } from "@chakra-ui/react";
import millify from "millify";
import color from "../color";
import { SlUserFollow } from "react-icons/sl";
import { BiDislike, BiLike } from "react-icons/bi";

interface Props {
  channelUrl: string;
  channelTitle: string;
  subscribers: string;
}
const VideoInfo = ({ channelTitle, channelUrl, subscribers }: Props) => {
  return (
    <HStack width={"100%"} alignSelf={"start"} justifyContent={"space-between"}>
      <HStack>
        <Avatar alignSelf={"start"} size={"md"} src={channelUrl!} />
        <VStack lineHeight={0.6} alignItems={"start"}>
          <Text lineHeight={1} fontSize={"lg"} fontWeight={"bold"}>
            {channelTitle!}
          </Text>
          <Text fontSize={"sm"} noOfLines={1} color={color.textColor}>
            {millify(parseInt(subscribers!))} Subscribers
          </Text>
        </VStack>
        <Button
          isDisabled
          borderRadius={"3xl"}
          colorScheme="teal"
          rightIcon={<SlUserFollow />}
        >
          Subscribe
        </Button>
      </HStack>

      <HStack
        borderRadius={"full"}
        bg={color.baseColor}
        height={"50px"}
        width={"100px"}
        justifyContent={"space-evenly"}
      >
        <BiDislike
          style={{
            fontSize: "25px",
          }}
        />
        <Text>|</Text>
        <BiLike
          style={{
            fontSize: "25px",
          }}
        />
      </HStack>
    </HStack>
  );
};

export default VideoInfo;
