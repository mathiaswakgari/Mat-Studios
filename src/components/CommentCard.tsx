import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import color from "../color";
import { BiDislike, BiLike } from "react-icons/bi";
import { Comment } from "../pages/VideoPage";
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
    <HStack alignSelf={"start"} marginBottom={5}>
      <Avatar src={authorProfileImageUrl} size={"sm"} />
      <VStack>
        <HStack alignSelf={"start"}>
          <Text fontWeight={"medium"}>@{authorDisplayName}</Text>
          <Text color={color.textColor}>
            {moment(publishedAt, "YYYYMMDD").fromNow()}
          </Text>
        </HStack>
        <Text marginLeft={1} alignSelf={"start"}>
          {textDisplay}
        </Text>
        <HStack alignSelf={"start"} justifyContent={"space-around"} w={"80px"}>
          <HStack>
            <BiLike fontSize="22px" color="gray" />
            <Text color={color.baseColor}>{likeCount}</Text>
          </HStack>
          <BiDislike fontSize="22px" color="gray" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CommentCard;
