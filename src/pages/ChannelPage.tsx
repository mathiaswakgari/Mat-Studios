import { VStack, Text, Divider } from "@chakra-ui/react";
import ChannelInfo from "../components/ChannelInfo";
import { useParams } from "react-router-dom";
import useChannel from "../hooks/useChannel";

const ChannelPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useChannel(id!);
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <VStack
      w={{
        base: "100%",
        sm: "90%",
        xl: "70%",
      }}
    >
      <ChannelInfo channel={data?.data?.items[0]!} />
      <Divider />
    </VStack>
  );
};

export default ChannelPage;
