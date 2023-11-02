import { VStack, Text } from "@chakra-ui/react";
import CommentCard from "./CommentCard";
import millify from "millify";
import { Comment } from "../pages/VideoPage";

interface Props {
  commentCount: string;
  comments: Comment[];
}

const Comments = ({ commentCount, comments }: Props) => {
  return (
    <>
      <VStack alignSelf={"start"}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
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
