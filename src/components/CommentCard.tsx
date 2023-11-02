import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import color from "../color";
import { BiDislike, BiLike } from "react-icons/bi";
import { Comment } from "../hooks/useComments";
import moment from "moment";

interface Props {
  comment: Comment;
}

const CommentCard = ({ comment }: Props) => {
  const {
    snippet: {
      topLevelComment: {
        snippet: {
          textDisplay,
          likeCount,
          authorDisplayName,
          publishedAt,
          authorProfileImageUrl,
        },
      },
    },
  } = comment;

  return (
    <HStack alignSelf={"start"} marginBottom={5} color={color.textColor}>
      <Avatar src={authorProfileImageUrl} size={"sm"} />
      <VStack>
        <HStack alignSelf={"start"}>
          <Text fontWeight={"medium"} fontSize={"sm"}>
            @{authorDisplayName}
          </Text>
          <Text fontSize={"sm"} color={color.textTwoColor}>
            {moment(publishedAt, "YYYYMMDD").fromNow()}
          </Text>
        </HStack>
        <Text marginLeft={1} fontSize={"sm"} alignSelf={"start"}>
          {textDisplay}
        </Text>
        <HStack alignSelf={"start"} justifyContent={"space-around"} w={"80px"}>
          <HStack>
            <BiLike fontSize="18px" color="gray" />
            <Text fontSize={"sm"} color={color.textTwoColor}>
              {likeCount}
            </Text>
          </HStack>
          <BiDislike fontSize="18px" color="gray" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CommentCard;
