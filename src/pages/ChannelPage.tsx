import { VStack, Text, Divider } from "@chakra-ui/react";
import ChannelInfo from "../components/ChannelInfo";
import { useParams } from "react-router-dom";
import useChannel from "../hooks/useChannel";
import ChannelBanner from "../components/ChannelBanner";
import ChannelVideos from "../components/ChannelVideos";

const ChannelPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useChannel(id!);

  if (isLoading) return <Text>Loading...</Text>;

  const channel = data?.data?.items[0]!;

  return (
    <VStack
      w={{
        base: "100%",
        sm: "90%",
        xl: "70%",
      }}
    >
      <ChannelBanner url={channel.brandingSettings.image.bannerExternalUrl} />
      <ChannelInfo channel={channel!} />
      <Divider />
      <ChannelVideos channelId={id!} />
    </VStack>
  );
};

export default ChannelPage;
