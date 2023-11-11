import { VStack, Text, Divider, Image } from "@chakra-ui/react";
import ChannelInfo from "../components/ChannelInfo";
import { useParams } from "react-router-dom";
import useChannel from "../hooks/useChannel";
import ChannelBanner from "../components/ChannelBanner";
import VideosGrid from "../components/VideosGrid";

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
    </VStack>
  );
};

export default ChannelPage;
