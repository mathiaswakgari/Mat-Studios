import { Avatar, Card, HStack, Text, VStack } from "@chakra-ui/react";
import { Channel } from "../hooks/useChannel";
import { Link } from "react-router-dom";
import color from "../color";
import SubscribeButton from "./SubscribeButton";

interface Props {
  channel: Channel;
}

const SearchChannelCard = ({ channel }: Props) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },

      title,
      description,
    },
    id: { channelId },
  } = channel;

  return (
    <Card
      h={{ base: "100px", md: "150px" }}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width={{ base: "100%", lg: "5xl" }}
      border={"none"}
      bg={"transparent"}
    >
      <Link
        to={`/channels/${channelId}`}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HStack w={"175px"}>
          <Avatar
            alignSelf={"start"}
            size={{ base: "lg", md: "2xl" }}
            src={url}
          />
        </HStack>
        <VStack
          w={{ base: "70%", md: "50%" }}
          gap={0.5}
          justifyContent={"center"}
        >
          <Text
            color={color.textColor}
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight={"medium"}
            alignSelf={"start"}
          >
            {title}
          </Text>
          <Text
            color={color.textTwoColor}
            alignSelf={"start"}
            fontSize={"xs"}
            noOfLines={2}
            lineHeight={1}
          >
            {description}
          </Text>
        </VStack>
        <HStack marginLeft={{ base: 1, md: 5 }}>
          {/* <Button
            alignSelf={"center"}
            colorScheme="red"
            borderRadius={"3xl"}
            width={"200px"}
            size={"sm"}
            fontWeight={"light"}
            fontSize={"sm"}
          >
            Subscribe
          </Button> */}
          <SubscribeButton />
        </HStack>
      </Link>
    </Card>
  );
};

export default SearchChannelCard;
