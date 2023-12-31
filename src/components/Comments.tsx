import { VStack, Text } from "@chakra-ui/react";
import CommentCard from "./CommentCard";
import millify from "millify";
import { Comment } from "../hooks/useComments";
import color from "../color";

interface Props {
  commentCount: string;
  comments: Comment[];
}

const Comments = ({ commentCount, comments }: Props) => {
  return (
    <>
      <VStack alignSelf={"start"} color={color.textColor}>
        <Text fontWeight={"bold"} fontSize={"lg"}>
          {`${millify(parseInt(commentCount!))} Comments`}{" "}
        </Text>
      </VStack>
      {comments?.map((comment) => (
        <CommentCard comment={comment!} />
      ))}
    </>
  );
};

export default Comments;
